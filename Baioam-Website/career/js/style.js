// Changing Svg position according to window width
const svg = document.querySelector("svg")

window.addEventListener("resize",function (event){
    const windowWidth = event.target.innerWidth
    const difference = 1214 - windowWidth

    if(windowWidth > 0){
        svg.style.top = "calc( -100% + " + (difference/3) + "px )";
    }
})
