let textBox=document.getElementById("text-box");

textBox.addEventListener("input",function(){
    var text=this.value;
    let char=text.length;

    let chars=document.getElementById("char");
    chars.innerHTML=char;

    //Word Count
    text=text.trim();

    let words=text.split(" ");
    let cleanlist=words.filter(function(ele){

        return ele!="";
    });
    let wordCount=cleanlist.length;

    let word=document.getElementById("word");
    word.innerHTML=wordCount;

    
   
    

});