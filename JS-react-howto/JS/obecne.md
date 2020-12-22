JS JE SINGLETHREADED
- v jeden okamžik běží jen jedna věc
- programátor tedy musí dávat pozor jen na to, aby neblokoval thread
 (nekončící loopy, čekání na neodpovídající volání)

RUN LOOP/EVENT LOOP
- JS has a concurrency model based on an "event loop"
- browsery mají event loop pro každý tab izolovaně, aby jeden neblokoval druhý
- event loop kontinuálně kontroluje (znovu a znovu - loop), jestli v CALL STACKU existuje nějaká funkce,
  která se má spustit a spouští je popořadě

CALL STACK
- soubor instrukcí, které se mají spustit

JS is synchronous in theory, but we do not know when some actions will happen
(when will user click, when will BE return data) - so its event driven.


ASYNC:
- v JS je většina asynchronních akcí neblokujících, vrací callback, promise nebo async/await
- spustí se operace a zatímco se čeká na její dokončení (čtení souboru procesorem,
  odpověď databáze, odpověď serveru), zpracovávají se jiné akce a pravidelně se
  kontroluje, jestli je už operace hotová
