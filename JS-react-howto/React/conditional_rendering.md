https://reactjs.org/docs/conditional-rendering.html
https://frontarm.com/james-k-nelson/react-anti-patterns-conditional-rendering/

Pro jednu větev:
{ !!něco && (<Jedna />) }

Pro dvě větve:
{ něco ? <Jedna /> : <Dve />}


Pozor na moc zanořené ternary, pak to vypadá nepřehledně. Přepracovat do sekvence
jednotlivých větví.
