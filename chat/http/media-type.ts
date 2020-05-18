export enum MediaType {
  /**
   * 
   */
  ALL = "*/*",
  /**
   * Atom is an XML-based document format that describes lists of related information known as "feeds". 
   * Feeds are composed of a number of items, known as "entries", each with an extensible set of attached metadata.  
   * For example, each entry has a title.
   */
  APPLICATION_ATOM_XML = "application/atom+xml",
  /**
   * Concise Binary Object Representation (CBOR) is a binary data serialization format loosely based on JSON. 
   * Like JSON it allows the transmission of data objects that contain name–value pairs, but in a more concise manner. 
   * This increases processing and transfer speeds at the cost of human-readability.
   */
  APPLICATION_CBOR = "application/cbor",
  /**
   * 
   */
  APPLICATION_FORM_URLENCODED = "application/x-www-form-urlencoded",
  /**
   * 
   */
  APPLICATION_JSON = "application/json",
  /**
   * 
   */
  APPLICATION_JSON_UTF8 = "application/json",
  /**
   * This is the default for binary files. As it means unknown binary file, browsers usually don't execute it, or even ask if it should be executed. 
   * They treat it as if the Content-Disposition header was set to attachment, and propose a "Save As" dialog.
   */
  APPLICATION_OCTET_STREAM = "application/octet-stream",
  /**
   * 
   */
  APPLICATION_PDF = "application/pdf",
  /**
   * 
   */
  APPLICATION_PROBLEM_JSON = "application/problem+json",
  /**
   * 
   */
  APPLICATION_PROBLEM_JSON_UTF8 = "application/problem+json",
  /**
   * 
   */
  APPLICATION_PROBLEM_XML = "application/problem+xml",
  /**
   * 
   */
  APPLICATION_RSS_XML = "application/rss+xml",
  /**
   * 
   */
  APPLICATION_STREAM_JSON = "application/stream+json",
  /**
   * 
   */
  APPLICATION_XHTML_XML = "application/xhtml+xml",
  /**
   * 
   */
  APPLICATION_XML = "application/xml",
  /**
   * Animated Portable Network Graphics
   */
  IMAGE_APNG = "image/apng",
  /**
   * Bitmap file
   */
  IMAGE_BMP = "image/bmp",
  /**
   * Graphics Interchange Format
   */
  IMAGE_GIF = "image/gif",
  /**
   * Microsoft Icon
   */
  IMAGE_ICO = "image/x-icon",
  /**
   * Joint Photographic Expert Group image
   */
  IMAGE_JPEG = "image/jpeg",
  /**
   * 	Portable Network Graphics
   */
  IMAGE_PNG = "image/png",
  /**
   * Scalable Vector Graphics
   */
  IMAGE_SVG = "image/svg+xml",
  /**
   * Tagged Image File Format
   */
  IMAGE_TIFF = "image/tiff",
  /**
   * Web Picture format
   */
  IMAGE_WEBP = "image/webp",
  /**
   * The multipart/form-data type can be used when sending the values of a completed HTML Form from browser to server.
   */
  MULTIPART_FORM_DATA = "multipart/form-data",
  /**
   * 
   */
  MULTIPART_MIXED = "multipart/mixed",
  /**
   * 
   */
  MULTIPART_RELATED = "multipart/related",
  /**
   * CSS files used to style a Web page must be sent with text/css. If a server doesn't recognize the 
   * .css suffix for CSS files, it may send them with text/plain or application/octet-stream MIME types. 
   * If so, they won't be recognized as CSS by most browsers and will be ignored.
   */
  TEXT_CSS = "text/css",
  /**
   * 
   */
  TEXT_EVENT_STREAM = "text/event-stream",
  /**
   * All HTML content should be served with this type. Alternative MIME types for XHTML (like application/xhtml+xml) are mostly useless nowadays.
   */
  TEXT_HTML = "text/html",
  /**
   * Per the HTML specification, JavaScript files should always be served using the MIME type text/javascript. 
   * No other values are considered valid, and using any of those may result in scripts that do not load or run.
   */
  TEXT_JAVASCRIPT = "text/javascript",
  /**
   * 
   */
  TEXT_MARKDOWN = "text/markdown",
  /**
   * This is the default for textual files. Even if it really means "unknown textual file," browsers assume they can display it.
   */
  TEXT_PLAIN = "text/plain",
  /**
   * 
   */
  TEXT_XML = "text/xml",
};

export default MediaType; 