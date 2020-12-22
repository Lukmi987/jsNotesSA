//Klasicky asynchronně:
fetch('https://api.com/values/1')
    .then(response => response.json())
    .then(json => console.log(json));

//async/await:
const request = async () => {
    const response = await fetch('https://api.com/values/1');
    const json = await response.json();
    console.log(json);
}
