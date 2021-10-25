/*started sidebar coding*/
function sidebar(){
    var sidebar=document.getElementById("slidebar");
    var aside=document.getElementById("animation");
    sidebar.style.display="block";
    aside.style.width="360px";
    aside.style.animation = "slidebar 0.1s";
    aside.style.animationFillMode = "forwards";
}
function sidebar_close(){
    var sidebar=document.getElementById("slidebar");
    sidebar.style.display="none";
}
/*ended sidebar coding*/