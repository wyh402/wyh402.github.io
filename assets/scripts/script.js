let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

let greyButton = document.getElementById("grey");
let blueButton = document.getElementById("blue");
let greenButton = document.getElementById("green");

function setFirstBanner(){
    container1.classList.remove("hidden");
    container2.classList.add("hidden");
    container3.classList.add("hidden");
}

greyButton.onclick = setFirstBanner;

function setSecondBanner(){
    container2.classList.remove("hidden");
    container1.classList.add("hidden");
    container3.classList.add("hidden");
}

blueButton.onclick = setSecondBanner;

function setThirdBanner(){
    container3.classList.remove("hidden");
    container1.classList.add("hidden");
    container2.classList.add("hidden");
}

greenButton.onclick = setThirdBanner;