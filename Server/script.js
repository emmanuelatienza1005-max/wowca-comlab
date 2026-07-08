const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        console.log("Navigated");
    });
});

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){
    header.style.background="#020617";
}else{
    header.style.background="#111827";
}

});