let btn =document.getElementById("submit");
let popup =document.getElementById("popup-box");
let ok = document.getElementById("ok");

btn.addEventListener("click", function btnClick(){

popup.style.display="flex";
});

ok.addEventListener("click",function okClick(){
    popup.style.display="none";

})

