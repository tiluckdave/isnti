const gallery = document.getElementById("gallery")

window.onmousemove = e => {
    // grab the X & Y positions
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // get the Xdecimal & Ydecimal
    const xDecimal = mouseX / window.innerWidth;
    const yDecimal = mouseY / window.innerHeight;

    const maxX = gallery.offsetWidth - window.innerWidth;
    const maxY = gallery.offsetHeight - window.innerHeight;

    const panX = maxX * xDecimal * -1;
    const panY = maxY * yDecimal * -1; 

    // gallery.style.transform = `translate(${panX}px,${panY}px)`

    gallery.animate({
        transform : `translate(${panX}px,${panY}px)`
    },{
        duration: 4000,
        fill: "forwards",
        easing: "ease"
    })

}