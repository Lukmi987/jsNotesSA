Debounce
- pokud se zavolá znovu a je již v průběhu, průběh se zruší a začne znovu
- nefunkčnost je většinou způsobená použitím na špatném místě, debounced funkce
musí jít přímo do onChange v inputu, například, ne až někde v setState

Throttle - spustí se vždy minimálně aspoň x krát za čas, tj. některá volání odfiltruje, ale některá ne.

- jsou k použití např. v knihovně lodash
