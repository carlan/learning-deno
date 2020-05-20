import 'https://deno.land/x/dotenv/load.ts';

import { 
  listenAndServe, 
  ServerRequest,
  HttpMethod,
  HttpStatus,
  MediaType,
  acceptWebSocket,
  isWebSocketCloseEvent,
  WebSocket,
} from './deps.ts';

const PORT = Deno.env.get('PORT');

let sequencer: number = 0;

const clients: Map<number, WebSocket> = new Map();

const handleWebSocketConnection = async (request: ServerRequest) => {

  const { conn, r: bufReader, w: bufWriter, headers } = request;

  try {
    const ws = await acceptWebSocket({
      conn, bufReader, bufWriter, headers
    });

    const clientId = sequencer++;

    clients.set(clientId, ws);

    try {

      for await (const event of ws) {
        if (typeof event === 'string') {
          for (const c of clients.values()) {
            await c.send(`${event}`);
          }
        } else if (isWebSocketCloseEvent(event)) {
          const { code, reason } = event;

          if (clients.has(clientId)) {
            clients.delete(clientId);
          }

          for (const c of clients.values()) {
            await c.send(`<p>A client left the chat...</p>`);
          }
        }
      }

    } catch(err) {
      console.error(`Failed to receive frame: ${err}`);
      
      if (!ws.isClosed) {
        await ws.close(1000).catch(console.error);
      }
    }

  } catch(err) {
    console.error(`Failed to accept connection: ${err}`);
    await request.respond({status: 400});
  }

};

const serveIndexPage = (request: ServerRequest) => {
  request.respond({
    status: HttpStatus.OK,
    headers : new Headers({
      'Content-Type': MediaType.TEXT_HTML,
    }),
    body: Deno.readFileSync('./index.html'),
  });
};

const handleConnection = async (request: ServerRequest) => {
  if (request.method === HttpMethod.GET && request.url === '/') {
    serveIndexPage(request);
  }
  
  if (request.method === HttpMethod.GET && request.url === '/chat') {
    await handleWebSocketConnection(request);
  }
};

const main = () => {
  const options = { port: Number(PORT) };

  console.log(`Server running on port: ${PORT}`);
  listenAndServe(options, async (request): Promise<void> => {
    await handleConnection(request);
  });

};

if (import.meta.main) {
  main();
}
