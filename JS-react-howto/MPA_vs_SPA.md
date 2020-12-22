- u SPA probíhá routing client side, u MPA probíhá server side.

MPA (multipage application)
- každé html a js pro jednotlivou routu je servírováno serverem zvlášť
- při změně routy dochází k page reload
- výhodné pro SEO optimalizace

MPA - server side rendering se používá v případě lepšího SEO, historie prohlížeče,
když uživatelé jsou geolokálně blízko a když používají slabší zařízení (mobily).

Nevýhody MPA - komplexnost BE (lze řešit mikroservice architekturami = více malých
BE apliací, které dělají svůj menší kousek a komunikují mezi sebou RESTEm),popřípadě
delší čas načítání při problémech na síti, při větší vzdálenosti od serveru.


SPA
- server pošle index.html s nějakými bundled skripty a css soubory, routy se již
vytváří a renderují na client side v browseru
- requires NO PAGE RELOADS, content is downloaded and rendered into the actual
one page
- react, angular are frameworks for managing SPA apps

Advantages:
- faster
- smoother, user is not redirected between pages
- faster development and better code managing

Disadvantages:
- "back" in browser will not take the user to the previous state, only to
previous page, but with wrong data
- difficult SEO
- less immune to XSS attacks
(client side script is injected to input to get data of other users)
- todays SPA become very complex, huge and slow to begin with (wide ecosystem of
settings and tools) --> starters, create react app, next.js
- slow and huge SPA can be solved by code splitting or server side rendering (MPA)
