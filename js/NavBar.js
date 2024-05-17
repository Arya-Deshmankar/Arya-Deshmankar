function show_Pro() {
    var y = document.getElementById("Projects");
    var x = document.getElementById("Education");
    var a = document.getElementById("slide_nav_1");
    var b = document.getElementById("slide_nav_2");
    if (y.display == "block") {

    } else {
        a.style.backgroundColor = "red";
        b.style.backgroundColor = "rgb(255, 92, 92)";
        y.style.display = "block";
        x.style.display = "none";
    }
}
function show_Edu() {
    var y = document.getElementById("Projects");
    var x = document.getElementById("Education");
    var a = document.getElementById("slide_nav_1");
    var b = document.getElementById("slide_nav_2");
    if (x.style.display == "block") {

    } else {
        b.style.backgroundColor = "red";
        a.style.backgroundColor = "rgb(255, 92, 92)";
        x.style.display = "block";
        y.style.display = "none";
    }
}

function remove_shadow() {
    let slide_nav = document.getElementById("slide_nav");
    let NavBar = document.getElementById("NavBar");
    slide_nav.style.boxShadow = "0px 0px 0px";
    NavBar.style.boxShadow = "0px 0px 0px";
}

function return_shadow() {
    let slide_nav = document.getElementById("slide_nav");
    let NavBar = document.getElementById("NavBar");
    slide_nav.style.boxShadow = "2.5px 2.5px 5px rgba(0, 0, 0, 0.5)";
    NavBar.style.boxShadow = "2.5px 2.5px 5px rgba(0, 0, 0, 0.5)";
}

window.addEventListener("load", (event) => {
    let EduBtt = document.getElementById("EducationBtt");
    let ProBtt = document.getElementById("ProjectsBtt");

    // EduBtt.onclick = function() {myFunction()};
    EduBtt.onclick = function () { show_Pro() };
    ProBtt.onclick = function () { show_Edu() };

    let NavBar = document.getElementById("NavBar");

    NavBar.onmouseover = function () { remove_shadow() };
    NavBar.onmouseleave = function () { return_shadow() };
});