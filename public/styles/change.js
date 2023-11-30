let btn = document.querySelector("button");
let password = document.querySelector("h6");
let img = document.querySelector(".shy-girl");

console.log(btn.classList);

let visibality = "show";

btn.addEventListener("click",()=>{

        if(visibality==="show"){
            img.setAttribute("src","styles/lookingGirl.jpeg");
            password.classList.remove("visibility");
            btn.innerHTML = 'Protect  <i class="fa-solid fa-shield"></i>';
            visibality = "Unseen";
        }else{
            img.setAttribute("src","styles/shyGirl.jpeg");
            password.classList.add("visibility");
            btn.innerHTML = 'Show <i class="fa-solid fa-eye-slash"></i>';
            visibality = "show";
        }
    
});
