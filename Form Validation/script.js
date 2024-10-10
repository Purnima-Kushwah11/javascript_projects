let btn=document.getElementById("btn");
let username=document.getElementById("username");
let password=document.getElementById("password");

btn.addEventListener("click",function(){
    if(username.value=="")
    {
        document.getElementById("usererror").innerHTML="User Name is Empty";
    }
    else if(username.value.length<3)
    {
        document.getElementById("usererror").innerHTML="User Name Required Minimum 3 Character";
    }
    else
    {
        document.getElementById("usererror").innerHTML=""
    }
    if(password.value=="")
    {
        document.getElementById("passerror").innerHTML="Password is Empty";
    }
    else
    {
        document.getElementById("passerror").innerHTML="";
    }


});

