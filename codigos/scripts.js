function slide1() {
    document.getElementById('slide').src = "slide1"
    setTimeout("slide2()", 2000)
}

function slide2() {
    document.getElementById('slide').src = "slide2"
    setTimeout("slide3()", 2000)

}

function slide3() {
    document.getElementById('slide').src = "slide3"
    setTimeout("slide1()", 2000)

}

