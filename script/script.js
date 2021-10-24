/*started sidebar coding*/
function sidebar(){
    var sidebar=document.getElementById("slidebar");
    var aside=document.getElementById("animation");
    sidebar.style.display="block";
    aside.style.width="350px";
    aside.style.animation = "slidebar 0.1s";
    aside.style.animationFillMode = "forwards";
}
function sidebar_close(){
    var sidebar=document.getElementById("slidebar");
    sidebar.style.display="none";
}
/*ended sidebar coding*/
/*Warning for browser compatibility*/

function check_browser(){
    if(navigator.userAgent.inderOf("MSIE")!=1){
        var webpage = document.getElementById("webpage");
        webpage.style.display="none";
        document.body.style.background="black";
        document.body.innerHTML="<h1 align='center' style=font-family:sans-serif;>Please open the website in Chrome</h1>";
        document.body.style.color="white";
    }
}
check_browser();

/*warning for browser compatibility*/

/*checking cookies*/

function checkCookieEnabled(){
    if(navigator.cookieEnabled==false){
        var webpage = document.getElementById("webpage");
        webpage.style.display="none";
        document.body.innerHTML="<h1 align='center' style=font-family:sans-serif;>Please enable Cookies</h1>";
        document.body.style.color="white";
    }
}

/*checking cookies*/