export enum HttpStatus {
  /**
   * The request has succeeded. The meaning of the success depends on the HTTP method:
   *  GET: The resource has been fetched and is transmitted in the message body.
   *  HEAD: The entity headers are in the message body.
   *  PUT or POST: The resource describing the result of the action is transmitted in the message body.
   *  TRACE: The message body contains the request message as received by the server
   */
  OK = 200,
  /**
   * The request has succeeded and a new resource has been created as a result. 
   * This is typically the response sent after POST requests, or some PUT requests.
   */
  CREATED = 201,
  /**
   * There is no content to send for this request, but the headers may be useful. 
   * The user-agent may update its cached headers for this resource with the new ones.
   */
  NO_CONTENT = 204,
  /**
   * The server could not understand the request due to invalid syntax.
   */  
  BAD_REQUEST = 400,
  /**
   * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". 
   * That is, the client must authenticate itself to get the requested response.
   */  
  UNAUTHORIZED = 401,
  /**
   * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. 
   * Unlike 401, the client's identity is known to the server.
   */  
  FORBIDDEN = 403,
  /**
   * The server can not find the requested resource. In the browser, this means the URL is not recognized. 
   * In an API, this can also mean that the endpoint is valid but the resource itself does not exist. 
   * Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. 
   * This response code is probably the most famous one due to its frequent occurrence on the web.
   */  
  NOT_FOUND = 404,
  /**
   * The request method is known by the server but has been disabled and cannot be used. 
   * For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, 
   * must never be disabled and should not return this error code.
   */  
  METHOD_NOT_ALLOWED = 405,
  /**
   * The media format of the requested data is not supported by the server, so the server is rejecting the request.
   */  
  UNSUPPORTED_MEDIA_TYPE = 415,
  /**
   * The server has encountered a situation it doesn't know how to handle.
   */
  INTERNAL_SERVER_ERROR = 500,
  /**
   * The request method is not supported by the server and cannot be handled. 
   * The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
   */
  NOT_IMPLEMENTED = 501,
  /**
   * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
   */
  BAD_GATEWAY = 502,
  /**
   * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. 
   * Note that together with this response, a user-friendly page explaining the problem should be sent. 
   * This responses should be used for temporary conditions and the Retry-After: 
   * HTTP header should, if possible, contain the estimated time before the recovery of the service. 
   * The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
   */
  SERVICE_UNAVAILABLE = 503,
  /**
   * This error response is given when the server is acting as a gateway and cannot get a response in time.
   */
  GATEWAY_TIMEOUT = 504,
};

export default HttpStatus;