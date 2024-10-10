let far=document.getElementById("far");
let cel=document.getElementById("cel")

far.addEventListener("input",function(){
    if(far.value!="")
    {
        cel.value=((far.value-32)*5/9);
    }
    else
    {
        cel.value="";
    }
});

cel.addEventListener("input",function(){
    if(cel.value!="")
    {
        far.value=(cel.value*(9/5)+32);
    }
    else
    {
        far.value="";
    }
    
});






