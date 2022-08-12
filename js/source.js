


document.addEventListener("DOMContentLoaded",(ev) =>{
    textbar();
    var logo = document.querySelector(".logo").addEventListener("click",() =>{
        location.reload();        
    })
 
})



function textbar(){

    var hiring = document.getElementById("Hiring");
    hiring.addEventListener("change",(ev) =>{
        ev.preventDefault();
        var input = document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("placeholder","fee/hr");
       
    
        var btn = document.querySelector(".txtbar").innerHTML = "";
        var btn = document.querySelector(".txtbar").appendChild(input);
    })

    var comment = document.querySelector("#comment");
    comment.addEventListener("change",() =>{
        document.querySelector(".txtbar").innerHTML = "";
    })
    
    var question = document.querySelector("#question");
    question.addEventListener("change",() =>{
        document.querySelector(".txtbar").innerHTML = "";
    })
}

