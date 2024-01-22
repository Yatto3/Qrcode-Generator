"use strict";


const inputElement = document.querySelector("[data-link]");
const qrContainerElem = document.querySelector(".qr");



function generate(){
   
    let userLink = inputElement.value ; 
    let blocks = qrContainerElem.querySelectorAll(".qrcontainer");

    if (userLink){
       inputElement.value = "";
       if (blocks.length === 1){
        qrContainerElem.removeChild(blocks[0]);
       }
       let container = document.createElement("div");
       container.setAttribute("data-qr","");
       container.classList.toggle("qrcontainer");
       new QRCode(container,userLink);
       qrContainerElem.append(container);

    }
}


