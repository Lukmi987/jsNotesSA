https://redux.js.org/recipes/computing-derived-data

Platí princip, že do komponenty se z redux store má předávat co nejmenší počet proměnných, kvůli tomu, aby se
komponenta zbytečně nerenderovala kvůli aktualizaci proměnné, kterou ani nepoužívá.
Co jde, importovat v akcích místo v komponentě.

A “selector” is simply a function that accepts Redux state as an argument and
returns data that is derived from that state.

Většinou v kontejneru nebo v akcích, místo:

function mapStateToProps(state) {
  return {
    data: state
  };
}

např.

function mapStateToProps(state) {
  return {
    specificData: getSpecificData(state)
  };
}

function getSpecificData(state) {
  return state.user;
}

Zde je ale problém, že se bude komponenta překreslovat při každém přeuložení dat, i kdyby byla data stejná jako předítm - zbytečný re-render.
Aby se komponenta přerenderovala jen pokud jsou data opravdu jiná oproti původním (memoizace), je potřeba použít knihovnu reselect:


===============

import { createSelector } from 'reselect';

export const getUser = createSelector(
  (state) => state,
  (state) => state.user, //vrací celý object user
)

- reselect má v parametrech dvě funkce proto, protože se počítá se zanořováním věcí ve store:

export const getSpecificData2 = createSelector(
  getUser, //zde získáme ze store object user
  user => user.name //zde už jen jméno usera 
)
