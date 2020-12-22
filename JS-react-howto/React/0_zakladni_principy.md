ZÁKLADNÍ REACT PRINCIPY:

1. One way binding:
component - action - action creator - reducer - store - component

2. Immutability (both state and store) - proto one way binding
- needitovat objekty přímo, ale pomocí action dispatchování (případně vytvářet deep copy při úpravách).

3. Virtual DOM
- nepracuje se s DOM, ale s jeho virtuální kopií -> větší rychlost

ZÁKLADNÍ BEST PRACTICE PRINCIPY:

0. Minimalistické, prezentační komponenty (použití selektorů, funkce přesunout do akcí, hooks,
  krátké JSX kousky)

1. Funkcionální přístup, protože to s reaktem ladí.

2. Používat co nejvíc konstanty (myšleno SOME_CONSTANT), nemít stringy natvrdo v kódu - znovupoužitelnost

3. nespoléhat na tree shaking (importovat specifické věci z knihoven)

4. Vyvarovat se side efektů
- když funkce dělá něco (navíc) jiného než je v jejím názvu
- když funkce mění proměnnou mimo svůj scope
(např. forEach cyklus pushuje do nějakého pole - nahrazovat pomocí reduce)

5. Store mít jen jeden, zdroj pravdy
- strukturu vytvářet pomocí combineReducers
- kvůli RYCHLOSTI updatování redux doporučuje využívání combineReducers a mít store co nejvíce
  flat; ale i kdyby byl hodně zanořený, stejně by to díky rychlosti JS neměl být znatelný problém
  https://redux.js.org/faq/performance


6. Co nejvíce stavů komponent dávat do redux store místo do komponent state, jen kdyby to byla opravdu očividně
zbytečnost, tak do state v dané komponentě
