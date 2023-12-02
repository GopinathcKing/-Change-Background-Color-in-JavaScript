const bodyBg = document.querySelector("body");
const button = document.getElementById("click-btn");
const divText = document.getElementById("change-text");

console.log(bodyBg);
let i = 1;
const changeColor = () =>{
    switch(i){
        case 1:
        bodyBg.classList.add("white");
        bodyBg.classList.remove("green","gray","pink","skyblue");
        divText.textContent = "Background-color : White";
        i++;
        break;
        case 2:
        bodyBg.classList.add("green");
        bodyBg.classList.remove("white","gray","pink","skyblue");
        divText.textContent = "Background-color : Green";
        i++;
        break;
        case 3:
        bodyBg.classList.add("gray");
        bodyBg.classList.remove("green","white","pink","skyblue");
        divText.textContent = "Background-color : Gray";
        i++;
        break;
        case 4:
        bodyBg.classList.add("pink");
        bodyBg.classList.remove("green","gray","white","skyblue");
        divText.textContent = "Background-color : Pink";
        i++;
        break;
        case 5:
        bodyBg.classList.add("skyblue");
        bodyBg.classList.remove("green","gray","pink","white");
        divText.textContent = "Background-color : Sky Blue";
        i++;
        break;
    }
    console.log(i);
    if(i==6){
        i=1;
    }
}

button.addEventListener("click",changeColor);


