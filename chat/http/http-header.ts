export enum HttpHeader {
  /**
   * Informs the server about the types of data that can be sent back.
   */
  ACCEPT = "Accept",
  /**
   * Which character encodings the client understands.
   */
  ACCEPT_CHARSET = "Accept-Charset",
  /**
   * The encoding algorithm, usually a compression algorithm, that can be used on the resource sent back.
   */
  ACCEPT_ENCODING = "Accept-Encoding",
  /**
   * Informs the server about the human language the server is expected to send back. 
   * This is a hint and is not necessarily under the full control of the user: the server should always 
   * pay attention not to override an explicit user choice (like selecting a language from a dropdown).
   */  
  ACCEPT_LANGUAGE = "Accept-Language",
  /**
   * Indicates if the server supports range requests, and if so in which unit the range can be expressed.
   */  
  ACCEPT_RANGES = "Accept-Ranges",
  /**
   * Indicates whether the response to the request can be exposed when the credentials flag is true.
   */  
  ACCESS_CONTROL_ALLOW_CREDENTIALS = "Access-Control-Allow-Credentials",
  /**
   * Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request.
   */  
  ACCESS_CONTROL_ALLOW_HEADERS = "Access-Control-Allow-Headers",
  /**
   * Specifies the methods allowed when accessing the resource in response to a preflight request.
   */  
  ACCESS_CONTROL_ALLOW_METHODS = "Access-Control-Allow-Methods",
  /**
   * Indicates whether the response can be shared.
   */  
  ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin",
  /**
   * Indicates which headers can be exposed as part of the response by listing their names.
   */  
  ACCESS_CONTROL_EXPOSE_HEADERS = "Access-Control-Expose-Headers",
  /**
   * Indicates how long the results of a preflight request can be cached.
   */  
  ACCESS_CONTROL_MAX_AGE = "Access-Control-Max-Age",
  /**
   * Used when issuing a preflight request to let the server know which HTTP headers will be used when the actual request is made.
   */  
  ACCESS_CONTROL_REQUEST_HEADERS = "Access-Control-Request-Headers",
  /**
   * Used when issuing a preflight request to let the server know which HTTP method will be used when the actual request is made.
   */  
  ACCESS_CONTROL_REQUEST_METHOD = "Access-Control-Request-Method",
  /**
   * The time, in seconds, that the object has been in a proxy cache.
   */  
  AGE = "Age",
  /**
   * Lists the set of HTTP request methods supported by a resource.
   */  
	ALLOW = "Allow",
  /**
   * Contains the credentials to authenticate a user-agent with a server.
   */
  AUTHORIZATION = "Authorization",
  /**
   * Directives for caching mechanisms in both requests and responses.
   */
  CACHE_CONTROL = "Cache-Control",
  /**
   * Controls whether the network connection stays open after the current transaction finishes.
   */
  CONNECTION = "Connection",
  /**
   * Used to specify the compression algorithm.
   */
  CONTENT_ENCODING = "Content-Encoding",
  /**
   * Indicates if the resource transmitted should be displayed inline (default behavior without the header), 
   * or if it should be handled like a download and the browser should present a “Save As” dialog.
   */
  CONTENT_DISPOSITION = "Content-Disposition",
  /**
   * Describes the human language(s) intended for the audience, so that it allows a user to 
   * differentiate according to the users' own preferred language.
   */
  CONTENT_LANGUAGE = "Content-Language",
  /**
   * The size of the resource, in decimal number of bytes.
   */
  CONTENT_LENGTH = "Content-Length",
  /**
   * Indicates an alternate location for the returned data.
   */
  CONTENT_LOCATION = "Content-Location",
  /**
   * Indicates where in a full body message a partial message belongs.
   */
  CONTENT_RANGE = "Content-Range",
  /**
   * Indicates the media type of the resource.
   */
  CONTENT_TYPE = "Content-Type",
  /**
   * Contains the date and time at which the message was originated.
   */
  DATE = "Date",
  /**
   * A unique string identifying the version of the resource. 
   * Conditional requests using If-Match and If-None-Match use this value to change the behavior of the request.
   */
  ETAG = "ETag",
  /**
   * Indicates expectations that need to be fulfilled by the server to properly handle the request.
   */
  EXPECT = "Expect",
  /**
   * The date/time after which the response is considered stale.
   */
  EXPIRES = "Expires",
  /**
   * Contains an Internet email address for a human user who controls the requesting user agent.
   */
  FROM = "From",
  /**
   * Specifies the domain name of the server (for virtual hosting), and (optionally) the TCP port number on which the server is listening.
   */
  HOST = "Host",
  /**
   * Makes the request conditional, and applies the method only if the stored resource matches one of the given ETags.
   */
  IF_MATCH = "If-Match",
  /**
   * Makes the request conditional, and expects the entity to be transmitted only if it has been modified after the given date. 
   * This is used to transmit data only when the cache is out of date.
   */
  IF_MODIFIED_SINCE = "If-Modified-Since",
  /**
   * Makes the request conditional, and applies the method only if the stored resource doesn't match any of the given ETags. 
   * This is used to update caches (for safe requests), or to prevent to upload a new resource when one already exists.
   */
  IF_NONE_MATCH = "If-None-Match",
  /**
   * Creates a conditional range request that is only fulfilled if the given etag or date matches the remote resource. 
   * Used to prevent downloading two ranges from incompatible version of the resource.
   */
  IF_RANGE = "If-Range",
  /**
   * Makes the request conditional, and expects the entity to be transmitted only if it has been modified after the given date. 
   * This is used to transmit data only when the cache is out of date.
   */
  IF_UNMODIFIED_SINCE = "If-Unmodified-Since",
  /**
   * Controls how long a persistent connection should stay open.
   */
  KEEP_ALIVE = "Keep-Alive",
  /**
   * The last modification date of the resource, used to compare several versions of the same resource. 
   * It is less accurate than ETag, but easier to calculate in some environments. 
   * Conditional requests using If-Modified-Since and If-Unmodified-Since use this value to change the behavior of the request.
   */
  LAST_MODIFIED = "Last-Modified",
  /**
   * The Link entity-header field provides a means for serialising one or more links in HTTP headers. 
   * It is semantically equivalent to the HTML <link> element.
   */
  LINK = "Link",
  /**
   * Indicates the URL to redirect a page to.
   */
  LOCATION = "Location",
  /**
   * Provides a mechanism with the TRACE and OPTIONS request methods to limit the number of times that the request is forwarded by proxies.
   */
  MAX_FORWARDS = "Max-Forwards",
  /**
   * Indicates where a fetch originates from.
   */
  ORIGIN = "Origin",
  /**
   * Implementation-specific header that may have various effects anywhere along the request-response chain. 
   * Used for backwards compatibility with HTTP/1.0 caches where the Cache-Control header is not yet present.
   */
  PRAGMA = "Pragma",
  /**
   * Defines the authentication method that should be used to access a resource behind a proxy server.
   */
  PROXY_AUTHENTICATE = "Proxy-Authenticate",
  /**
   * Contains the credentials to authenticate a user agent with a proxy server.
   */
  PROXY_AUTHORIZATION = "Proxy-Authorization",
  /**
   * Indicates the part of a document that the server should return.
   */
  RANGE = "Range",
  /**
   * The address of the previous web page from which a link to the currently requested page was followed.
   */
  REFERER = "Referer",
  /**
   * Indicates how long the user agent should wait before making a follow-up request.
   */
  RETRY_AFTER = "Retry-After",
  /**
   * Contains information about the software used by the origin server to handle the request.
   */
  SERVER = "Server",
  /**
   * Send cookies from the server to the user-agent.
   */
  SET_COOKIE = "Set-Cookie",
  /**
   * Sends cookies from the server to the user-agent, but has been obsoleted. Use Set-Cookie instead.
   */
  SET_COOKIE2 = "Set-Cookie2",
  /**
   * Specifies the transfer encodings the user agent is willing to accept.
   */
  TE = "TE",
  /**
   * Allows the sender to include additional fields at the end of chunked message.
   */
  TRAILER = "Trailer",
  /**
   * Specifies the form of encoding used to safely transfer the entity to the user.
   */
  TRANSFER_ENCODING = "Transfer-Encoding",
  /**
   * The standard establishes rules for upgrading or changing to a different protocol on the current client, 
   * server, transport protocol connection. For example, this header standard allows a client to change from 
   * HTTP 1.1 to HTTP 2.0, assuming the server decides to acknowledge and implement the Upgrade header field. 
   * Neither party is required to accept the terms specified in the Upgrade header field. It can be used in 
   * both client and server headers. If the Upgrade header field is specified, then the sender MUST also send 
   * the Connection header field with the upgrade option specified.
   */
  UPGRADE = "Upgrade",
  /**
   * Contains a characteristic string that allows the network protocol peers to identify the application type, 
   * operating system, software vendor or software version of the requesting software user agent. 
   */
  USER_AGENT = "User-Agent",
  /**
   * Determines how to match request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server.
   */
  VARY = "Vary",
  /**
   * Added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers.
   */
  VIA = "Via",
  /**
   * General warning information about possible problems.
   */
  WARNING = "Warning",
  /**
   * Defines the authentication method that should be used to access a resource.
   */
  WWW_AUTHENTICATE = "WWW-Authenticate",
};

export default HttpHeader;