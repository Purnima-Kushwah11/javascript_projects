let btn = document.getElementById("btn");
let img = document.getElementById("img");
let input = document.getElementById("input");

btn.addEventListener('click', function hide() {
    if (img.src.includes("eye.png"))
    {
        img.src = "hidden.png";
        input.type="password";
    }
     else 
     {
        img.src = "eye.png";
       input.type="text";
     }
})