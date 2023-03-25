const navbar=document.querySelector(".navbar");
const bot=document.querySelector(".bottomcontainer");

console.log(navbar.offsetHeight);
console.log(bot.offsetTop);

window.addEventListener("scroll",function(){
console.log(navbar.offsetHeight);
if(window.scrollY > bot.offsetTop-50-navbar.offsetHeight
){
    navbar.classList.add("active");
}
else{
    navbar.classList.remove("active");
}

});