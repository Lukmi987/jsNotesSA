useEffect()
 - in react class lifecycle methods, we can think of useEffect as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
    -UseEffect allow us to handle our logic in lifecycle methods.
    -useEffect will be called every time something affects your component. !!!!!!!!!!!

import React, {useEffect, useState} from 'react';

export const EffectDemo = () => {
    //State
    const [fullName, setFullName] = useState({name: 'name', familyName: 'family'});
    const [title,setTitle] = useState('useEffect() in Hooks');

    //useEffect is a function that handles your actions when something affects your component.
    //Our useEffect method is acting like componentDidUpdate now.
    useEffect(() => {
        console.log('useEffect has been called!'); //it will be called dozens times !!!
        setFullName({name:'Marco',familyName: 'Shaw'});
    });

    return(
        <div>
            <h1>Title: {title}</h1>
            <h3>Name: {fullName.name}</h3>
            <h3>Family Name: {fullName.familyName}</h3>
        </div>
    );
};
------------------------------------------------------
We  can pass an array as second argument,  This array clearly tells react that just call useEffect when fields in me has been changed.
    -So if you put ”name” in the array and pass it as second argument of useEffect(); your method will be called just when “name” changes.

componentDidMount - to tell useEffect to act like componentDidMount just pass an empty array and everything will be perfect.!!!
    //useEffect
    useEffect(() => {
        console.log('useEffect has been called!');
        setFullName({name:'Marco',familyName: 'Shaw'});
    },[]); //Pass Array as second argument
=================================================================================================================
Fetch data with useEffect


    import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                setCountries(res.data);
                setLoad(true);
            })
            .catch(err => {
                setError(err.message);
                setLoad(true)
            })
    }, []);


    if (load) {
        return (<ul>
            {error ? <li>{error.message}</li> : countries.map((country, index) => <li key={index}>{country.name}</li>)}
        </ul>);
    } else {
        return (
            <div>
                Loading...
            </div>
        );
    }
};
// to make it cleaner we can move our fetch method to another file
import axios from 'axios';

export const getItem = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            resolve(res.data);
        }).catch(err => reject(err));
    });
};

//
useEffect(() => {
    getItem('https://restcountries.eu/rest/v2/all')
        .then(res => {
            setCountries(res);
            setLoad(true)
        }).catch(err => {
            setError(err);
            setLoad(true);
        }
    );
}, []);