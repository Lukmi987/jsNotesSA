Cross-Origin Resource Sharing (CORS)

 (CORS) is an HTTP-header based mechanism that allows a server to indicate any other origins (domain, scheme, or port) than its own from which a browser
should permit loading of resources

An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for
https://domain-b.com/data.json.
The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers.
 Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.


Cross-origin requests – those sent to another domain (even a subdomain) or protocol or port – require special headers from the remote side.
CORS exists to protect the internet from evil hackers.
