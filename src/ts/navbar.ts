// Rendo 
let sticky = 0;
let header;
window.addEventListener('load', () => {
    window.addEventListener('scroll', scrollFunction);

    // Get the header
    header = document.getElementById("navBar");

    // Get the offset position of the navbar
    sticky = header.offsetTop;
});

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}