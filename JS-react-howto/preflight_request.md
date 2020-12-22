OPTIONS is a request to determine whether the server we are calling supports the method (post, get...)
This is called a pre-flight request.

When CORS are not allowed on server, preflight request with OPTIONS will fail, so
its the first error in network a programmer will see.

Když vyletí CORS, nedostanu v Javascriptu/axiosu data response, ani e.response.status,
web browser to blokne dřív. Musí to vyřešit BE a povolit CORS na serveru.
