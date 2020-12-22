Komponenta se rerenderuje, pokud je změněna proměnná, která je namapovaná v props.

Pokud se ale sleduje pole objektů, musí se před uložením do store prohodit celé pole, aby bylo jiné.
Jen změnu objektu v poli react nezachytí.

const arr = yield select(getArrFromStore);
arr[0].x = 2; //objekt v poli změněn

yield put({SET_ARRAY, arr}); //komponenta se nepřerenderuje, protože arr === arr, vnitřní změna uvnitř pole se neposuzuje

řešení --->

//deep copy of array of objects:
const newArray = arr.map(a => ({...a}));

yield put({SET_ARRAY, newArray}); //komponenta se nyní přerenderuje, protože ve store je jakoby nové array
