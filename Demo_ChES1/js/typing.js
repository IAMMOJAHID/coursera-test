const textArray = ["FUN.","PASSIONATE.","AMAZING.","ChES!"];
const typingDelay = 200;
const erasingDelay = 100;
const newTestDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

const typedtextspan = document.querySelector(".typed-text");
const cursorspan = document.querySelector(".cursor")
function type() {
    if(charIndex < textArray[textArrayIndex].length){
        if(!cursorspan.classList.contains("typing"))
            cursorspan.classList.add("typing");
        typedtextspan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type,typingDelay);
    }
    else{
        cursorspan.classList.remove("typing");
        setTimeout(erase,newTestDelay);
    }
}
window.addEventListener("DOMContentLoaded",()=>{
setTimeout(type,newTestDelay);
});

function erase(){
    if(charIndex>0)
    {
        typedtextspan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,erasingDelay);
    }
    else{
        textArrayIndex++;
        if(textArrayIndex>=textArray.length)
            textArrayIndex=0;
        setTimeout(type,typingDelay+1000);    
    }
}