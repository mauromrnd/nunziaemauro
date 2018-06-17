
import 'normalize.css/normalize.css';

import 'bootstrap/scss/bootstrap.scss';
import './styles/index.scss';

import 'jquery/dist/jquery.js';
import 'bootstrap/js/src/collapse.js';

import * as ScrollReveal from 'scrollreveal/dist/scrollreveal.js';

import './ts/map.ts'
import './ts/foto.ts'
import './ts/navbar.ts'

import * as smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();
 
let sr = ScrollReveal({ reset: true });
(<any> window ).sr = sr;

// Customizing a reveal set
sr.reveal('#copertina', { duration: 2000 });
sr.reveal('.trasparent', { duration: 1000 });


