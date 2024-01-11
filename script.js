let myName=document.getElementById("name");
let myLastName=document.getElementById("lastName")
let myCheck=document.getElementById("check")
let mySubmit=document.getElementById("submit")
let myMessage=document.getElementById("message")
let myMessage2=document.getElementById("message2")
let color=document.getElementById("message")
let color2=document.getElementById("message2")
function checkValidation(){
    if(myName.validity.valueMissing){
        message.innerHTML=myName.validationMessage; 
        
        color.style.color="red"
    }
    else if(myName.validity.patternMismatch){
        message.innerHTML=myName.validationMessage; 
        color.style.color="red"
    }
    else{
        message.innerHTML="Valid"
        color.style.color="green"
    }
    if(myLastName.validity.valueMissing){
        message2.innerHTML=myLastName.validationMessage;
        color2.style.color="red"
    }
    else if(myLastName.validity.patternMismatch){
        message2.innerHTML=myLastName.validationMessage;
        color2.style.color="red"
    }
    else{
        message2.innerHTML="Valid"
        color2.style.color="green"
    }
}
    mySubmit.addEventListener("click",()=>{
       alert("succesfully")
        
    //    alert("You submited succesfully")
    //    if(myName.length==0 && myLastName.length==0){
    //    return "not succesfully!"
    //    }
    })
 myCheck.addEventListener("click",checkValidation);