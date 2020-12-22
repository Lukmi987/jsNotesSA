Aktuální verze je react 16.9

Komponenta obsahuje:
- html kód ve formě JSX (prezentační vrstva)
- svůj vnitřní state (aktuální stav), který je nezávislý na "store"
- props předané od parenta (i metody, i data); parent je vzal z kontejneru nebo od dalšího parenta
- akce namapované v kontejneru
- props namapované v kontejneru, vybrané pomocí selektorů
- po změně "store" nebo state se aktualizuje/rerenderuje
- má několik interních handlerů: componentDidMount, componentDidUpdate apod.

Komponenta používá akce.

Akce dispatchují eventy, ty jsou zachytávány v redux části "reducers".

Reducery naslouchají na eventy vyvolané akcemi a na jejich základě aktualizují "store".

Komponenta naslouchá na změnu props ve store (pomocí connect) a při jejich změně se rerenderuje.


Připojení komponenty:
a) volá se konstruktor
b) volá se componentDidMount resp. hooks alternative
c) volá se render

===================

AKCE

- "externí" funkce, kterými komponenta ovlivňuje store;

Každá akce je plain object, který se skládá z:
- type (nutný)
- data, payload nebo jakkoliv pojmenovaná data

V případě použití thunk - navíc action creator (funkce, která vrací action object)

====================

Stránka pro přehled optimalizace react kódu:
https://reactjs.org/docs/optimizing-performance.html

=====================

Pure components:

Pure components are the simplest, fastest components we can write.

=======================

static
- static properties are properties of a class, not of an instance of a class
- dvě instance třídy budou mít svůj vlastní state, ale společné static properties
- in a react component, can be used for  defaultProps, propTypes, contextTypes, and displayName
- for example, when I use component Foo 2x in the app, it will have different states, but the same defaultProps

=======================

Dvě hlavní metody store: dispatch a getState

The dispatch function can be accessed directly from the store as store.dispatch(),
and the store state can be accessed directly by store.getState();

But more likely you'll access it using a helper like react-redux's connect() or sagas.

=====================

//pokud soubor exportuje více věcí:
export const xyz
import {xyz} from ... //ze závorkami

//pokud exportuje jen jednu defaultní:
export default xyz
import xyz from ...

===============

navigace v komponentě:
a) this.props.history.push('/login');

b) import { Redirect } from 'react-router-dom';
...
<Redirect to="/auth" props={this.props} push />;

================

Při updatování state myslet na to, že musí být immutable, tj. nejprve vytvořit
jeho kopii, tu změnit a tu pak předat do setState();


==================

Výhody reactu oproti angularu:

- angular je html a kolem něj je JS omáčka, reactjs je o JS a html (JSX) je druhotný
- angular developera příliš odstraňuje od JS, ztrácí pak dobré programovací návyky a znalosti
- eact má virtual DOM - rychlost
- react je lehký k naučení, pak se dají přidávat knihovny jako redux, redux saga, react intl apod. zatímco angular je obří framework a ekosystém, který má vše v sobě, tudíž se
na začátku těžko učí
- react má one way binding (přehlednější flow operací, lehčí debugging)
- díky nestabilitě angularu se react stal defacto standard FE vývoje


Slabé stránky react/reduxu:
- vše musí projít cyklem komponenta-akce-saga-reducer-selector-komponenta, což může programátory svádět k tomu to nějak přeskočit a naprasit to jinak, rychleji

==================

Knihovny používané nejčastěji s reactem:
react-intl (lokalizace)
reselect
redux
saga nebo thunk jako middlewary pro redux
react-router 
