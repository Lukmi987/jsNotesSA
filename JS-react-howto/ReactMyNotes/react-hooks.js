Hooks are something that let you write Functional Components and still hook into class-based features and use them.
    - still use wonderful features of Class-based components, Specifically States and Stateful Logic!

import React, { useState } from 'react';

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

UseState(): this is a function that is provided by react team in react library and you have to import it first.
            Returns an array and its argument is the initial value of state.

    Count : the name of our variable in state;
    SetCount: a func that implements our stateful logic. The input of setCount is our state's new value;
    Brackets []: are simple array destructuring!!. Every useState() returns an array!.  So, by using this bracket we are using first value of array ([0]) as value of our state and second ([1]) is
                the method we define to change our state.
----------------------------------------------------------------------------------------
Custom Hook

export const CounterDemo = () => {
    const [count, handleCount] = useCounter(100, 130,5);
    return (<div>
        <p>{count}</p>
        <button onClick={handleCount}>Count</button>
    </div>);
};
 //custom hook func
import {useState} from 'react';


export const useCounter = (start, finish, step) => {
    //Definition of our state

    const [count, setCount] = useState(start);

    //Implementation of our handleCount method

    const handleCount = () => {
        if (count === finish) {
            return setCount(start);
        } else {
            return setCount(count + step);
        }
    };

    //Return our custom hook array

    return [count, handleCount]
};