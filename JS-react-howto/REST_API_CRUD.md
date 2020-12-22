1. CRUD
- 4 hlavní operace na databázi
- create, read, update, delete

2. REST
- architektura přenosu informací mezi webovými systémy (FE - BE)
- routy jsou pojmenovány jako podstatná jména, např. /user/name/
- "restful": komunikace mezi systémy podle REST pravidel
- REST API pro konkrétní služby bývá zdokumentováno v aplikacích jako je swagger
- 4 hlavní http metody: get, post, put, delete

3. API
- rozhraní, dokumentace jak z FE volat BE pro uložení nebo získání dat
- skládá se z routy (URI) a toho jaké parametry v url nebo data v těle requestu se mají poslat
- viz nějaký swagger regiojetu

Výhody RESTu:
Implementace serveru a klienta může být dělána a měněna nezávisle,
dokud je stanoveno, jaký formát zpráv se bude posílat.

Vlastnosti RESTu:
- poskytují jednotné veřejné rozhraní - API
- stateless (neuchovávají si data o stavu)
- client-server
- lze použít cache

Vývojáři často vnímají 4 http metody jako zrcadlící 4 CRUD metody:

Create     POST
Read       GET
Update     PUT
Delete     DELETE

Idempotentnost
- stav serveru bude stále tentýž, bez ohledu na to, kolikrát se operace
zavolá
- např. http metoda PUT je idempotentní, může se volat kolikrát chce a pokud bude
mít pokaždé stejná data, databáze zůstává stejná


POST
- vytváření, není známo serverové id, např. id uživatele
- pokud se zašle dvakrát stejný, na serveru se vytvoří DVA nové, samostatné záznamy

PUT
- známe id toho, co měníme, musí se zaslat všechny hodnoty, protože původní zdroj se
přepíše
- pokud se zašle dvakrát stejný, na serveru bude jeden záznam, ten poslední


Pozn:
Někdy se GET používá pro zasílání dat, v tom případě jsou všechny vidět v URI
parametrech - nepoužívat pro neveřejné věci.
