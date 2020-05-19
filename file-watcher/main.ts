import { 
  listenAndServe, 
  ServerRequest,
  readFileStrSync,
} from './deps.ts';

const PORT = 3000;

const serveIndexPage = (request: ServerRequest) => {
  request.respond({
    status: 200,
    headers : new Headers({
      'Content-Type': 'text/html',
    }),
    body: readFileStrSync('./public/index.html'),
  });
};

const handleConnection = async (request: ServerRequest) => {
  serveIndexPage(request);
};

const main = () => {
  const options = { port: Number(PORT) };

  console.log(`Server running on port: ${PORT}`);
  console.log('GO AHEAD CHANGE ME!');
  listenAndServe(options, async (request: any): Promise<void> => {
    await handleConnection(request);
  });

};

if (import.meta.main) {
  main();
}
