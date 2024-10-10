//Change on same Color//
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");

//Color Selection//
let white=document.getElementById("white");
let blue=document.getElementById("blue");
let green=document.getElementById("green");




//Change Image//
function changeImage(color)
{
     const imgElement=document.getElementById("img");
     if(color=='white')
     {
        imgElement.src='white-front.jpg';
        btn1.addEventListener("click",function change(){
            imgElement.src='white-front.jpg';
        });
        btn2.addEventListener("click",function change(){
            imgElement.src='white-back.jpg';
        })
        btn3.addEventListener("click",function change(){
            imgElement.src='white-sleeve.jpg';
        })
     }
     else if(color=='blue')
     {
        imgElement.src='blue-front.jpg';
        btn1.addEventListener("click",function change(){
            imgElement.src="blue-front.jpg";
        });
        btn2.addEventListener("click",function change(){
            imgElement.src='blue-back.jpg';
        });
        btn3.addEventListener("click",function change(){
            imgElement.src='blue-sleeve.jpg';
        });

     }
     else if(color=='green')
     {
        imgElement.src='green-front.jpg';
        btn1.addEventListener("click",function change(){
            imgElement.src="green-front.jpg";
        });
        btn2.addEventListener("click",function change(){
            imgElement.src='green-back.jpg';
        });
        btn3.addEventListener("click",function change(){
            imgElement.src='green-slevee.jpg';
        });
     }
}

//Quantity selection//
let inc=document.getElementById("inc");
let dec=document.getElementById("dec");
let inp=document.getElementById("inp");

inc.addEventListener('click',function inc(){
    if(inp.value>=0)
    {
        inp.value++;
    }
});
dec.addEventListener('click',function dec(){
    if(inp.value>=1)
    {
        inp.value--;
    }

});

