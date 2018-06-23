'user strict'


var lista = <HTMLDivElement> document.querySelector('#listaProgramma');

// Get a reference to the <path>
var path = <SVGPathElement>lista.querySelector('path');

// Get length of path... ~577px in this demo
var pathLength = path.getTotalLength();


// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength + '';


// When the page scrolls...
window.addEventListener("scroll", function (e) {

    let diff = lista.getBoundingClientRect().top + ( window.innerHeight /2);

    if ( window.innerHeight >= diff) {

        // What % down is it? 
        var scrollPercentage =
            (window.innerHeight - diff) / (window.innerHeight);

        // Length to offset the dashes
        var drawLength = pathLength * scrollPercentage;

        // Draw in reverse
        path.style.strokeDashoffset = pathLength - drawLength + '';
   }
});