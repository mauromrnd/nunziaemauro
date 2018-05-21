import React from "react"
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import HomeComponent from "../components/home";
import MapComponent from "../components/map";
import InstagramComponent from "../components/instagram";
import ContactsComponent from "../components/contacts";


const fullPageOptions = {
    // for mouse/wheel events
    // represents the level of force required to generate a slide change on non-mobile, 10 is default
    scrollSensitivity: 7,

    // for touchStart/touchEnd/mobile scrolling
    // represents the level of force required to generate a slide change on mobile, 10 is default
    touchSensitivity: 7,
    scrollSpeed: 500,
    hideScrollBars: true,
    enableArrowKeys: true
};

const horizontalSliderProps = {
    name: 'horizontalSlider1', // name is required
    infinite: true, // enable infinite scrolling
};

const horizontalSlides = [
    <Slide> Slide 2.1 </Slide>,
    <Slide> Slide 2.2 </Slide>
];
horizontalSliderProps.slides = horizontalSlides;

const slides = [
    <Slide> <HomeComponent /> </Slide>,
    <Slide className="map"> <MapComponent /> </Slide>,
    <Slide> <InstagramComponent /> </Slide>,
    <HorizontalSlider {...horizontalSliderProps}></HorizontalSlider>,
    <Slide> <ContactsComponent /> </Slide>
];
fullPageOptions.slides = slides;

class FullpageReact extends React.Component {
    render() {
        return (
            <Fullpage {...fullPageOptions} />
        )
    }
}
export default FullpageReact;
