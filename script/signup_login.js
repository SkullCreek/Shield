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

//start login coding

function login(){
    var username=document.getElementById("log-name").value;
    var password=document.getElementById("log-pwd").value;
    var login_input = {username:username,password:password};
    var login_data=JSON.stringify(login_input);
    sessionStorage.setItem(username,login_data); 
    var session_data = sessionStorage.getItem(username);
    var user_detail = JSON.parse(session_data);
    if(localStorage.getItem(user_detail.username) == null){
        alert("user not found");
    }

    else{
        if(localStorage.getItem(user_detail.username).match(user_detail.password))
        {
            alert("Login success");
        }
        else{
            alert("user not found");
        }
    }
}

//end login coding