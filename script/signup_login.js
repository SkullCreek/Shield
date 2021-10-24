//start signup coding
function signup(){
    var name = document.getElementById("sign-name").value;
    var email = document.getElementById("sign-email").value;
    var mobile = document.getElementById("sign-num").value;
    
    var password = document.getElementById("sign-pwd").value;
    
    if(name!="" && email!="" && mobile!="" && password!=""){
        var user_input = {name:name,email:email,mobile:mobile,password:password};
        var user_data = JSON.stringify(user_input);
        localStorage.setItem(email,user_data);
        document.getElementById("signup_success").innerHTML= "Sign Up Successfull";
        name="";
        email="";
        mobile="";
        password="";
        setTimeout(function(){document.getElementById("signup_success").innerHTML=""},2000);
        return false;
    }
}
function signup_check(){
    var mob = document.getElementById("sign-num");
    var pwd = document.getElementById("sign-pwd");
    var email = document.getElementById("sign-email").value;
    var eml = document.getElementById("sign-email");
    var sub = document.getElementById("sign-sub");
    var warning = document.getElementById("signup-warning");
    if(localStorage.getItem(email)!=null){
        warning.innerHTML="User already exsists";
        mob.disabled=true;
        pwd.disabled=true;
        sub.disabled=true;
        eml.classList.add("animate__pulse");
        eml.onclick = function(){
            this.value="";
            warning.innerHTML="";
            mob.disabled=false;
            pwd.disabled=false;
            sub.disabled=false;
        }
    }
}
//signup validation end