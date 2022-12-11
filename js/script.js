window.onscroll = function(){
    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("icon_bici");
    var elemento2 = document.getElementById("icon_bici2");

    elemento1.style.bottom = posicion * 0.9 + "px";
    elemento2.style.top = posicion * 0.9 + "px";
}