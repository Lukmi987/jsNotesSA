Context API je součást reactu a řeší situaci, kdy komponenty na různých úrovních používají stejný state a
zároveň tento state nechceme passnout od root componenty až po nejnižší level.

Je to rychlá a jednoduchá pomůcka pro malé projekty, která umí jen toto a nic víc. Vůbec se nehodí pro
enterprise aplikace, kde je potřeba mnohem více featur - debugování, automatická optimalizace, middlewary k akcím, jednotný serializovaný store pro celou app apod.

Na větších komerčních projektech vždy použít redux!
