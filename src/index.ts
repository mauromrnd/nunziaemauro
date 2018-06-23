
import 'normalize.css/normalize.css';

import 'bootstrap/scss/bootstrap.scss';
import './styles/index.scss';

import 'jquery/dist/jquery.js';
import 'bootstrap/js/src/collapse.js';


import './ts/map.ts'
import './ts/foto.ts'
import './ts/navbar.ts'
import './ts/programma.ts'

import * as ScrollReveal from 'scrollreveal/dist/scrollreveal.js';
import * as SmoothScroll from 'smooth-scroll/dist/smooth-scroll';
import * as Rellax from 'rellax/rellax';

var scroll = new SmoothScroll('a[href*="#"]');


let sr = ScrollReveal({ reset: false, delay: 500 });
(<any>window).sr = sr;

// Customizing a reveal set
sr.reveal('.copertina', { duration: 2000, delay: 500, });
sr.reveal('.trasparent', { duration: 1000 });
sr.reveal('.title', { duration: 1000, reset: false });


// parallasse
var rellax = new Rellax('.rellax');

