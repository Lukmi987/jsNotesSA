an event is basically a signal that is generated by a certain dom node and a signal means that something has happened,

buttonElement.addEventListener('mouseenter', function (e){})
Or the old way but not good
buttonElement.onmouseenter = function (e) {}

Removing listener

const alertH1 = function (e) {
    //execute my code the remove
    // nice pattern how to listen just once
    buttonElement.removeEventListener('mouseenter', elertH1)

}
buttonElement.addEventListener('mouseenter', alertH1);