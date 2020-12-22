//DOM - Document Object Model - tree přístup k HTML elementům; "document" je nejvyšší objekt; každý element je objekt

//Get 1
let title = document.title;
let doctype = document.doctype; //returns document's doctype
let head = document.head; //<head> element
let body = document.body; //<body> element
let anchors = document.anchors; //all <a...> elements
let links = document.links; //all <a href=...> elements
let forms = document.forms;
let images = document.images;
let scripts = document.scripts;

let readyState = document.readyState; //loading status of the document
let cookie = document.cookie; // returns document's cookie
let url = document.url; //complete url of the document


//Get 2
let myElement = document.getElementById("intro"); //jeden element, pokud je víc stejných id, vrací první element

let elements = document.getElementsByClassName("intro"); //pole elementů
let elements2 = document.getElementsByTagName("p"); //pole elementů

let element = document.getElementsByTagName("p")[0]; //první z pole elementů

//hledání lze i omezit zanořením do DOM tree
let main = document.getElementById("main");
let divsInMain = main.getElementsByTagName("div");

let xForm = document.forms["xForm"]; //xForm je id daného formu, totéž jako:
let yForm = document.getElementById("yForm");

//Set
document.write("something"); //přepíše vše ostatní, takže v celém HTML bude jen "something";  never use after document is loaded
document.getElementById("demo").innerHTML = "Text"; //pro p, divy, spany apod
document.getElementById("myImage").src = "landscape.jpg"; //změna hodnot atributů elementu
document.getElementById("p2").style.color = "blue"; //změna stylů

//HTML obsahuje nodes - html is a root node, přístup může být pomocí node tree:
let myTitle = document.getElementById("demo").childNodes[0].nodeValue;

//přidání nového elementu - a) vytvoření b) append to existing element
let nosic = document.createElement("p");
let obsah = document.createTextNode("This is new.");
nosic.appendChild(obsah);

let element = document.getElementById("div1");
element.appendChild(nosic);

//odebrání elementu
let parent = document.getElementById("div1");
let child = document.getElementById("p1");
parent.removeChild(child);

//Přidání eventu programátorsky:
 document.getElementById("myButton").addEventListener("click", displayDate);
 document.getElementById("myButton").removeEventListener("click", displayDate);

//Eventy
 <body onload="checkCookies()"> //když user přijde na stránku
 <body onunload="checkCookies()"> //když user odchází ze stránky
 <button onclick="displayDate()">Try it</button>
 <button onmouseover="displayDate()">Try it</button>
 <button onmouseout="displayDate()">Try it</button>
 <input type="text" onchange="upperCase()"> </input>
