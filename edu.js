window.addEventListener("scroll",()=>{
    document.querySelector("nav").classList.toggle("window-scroll",window.scrollY>100)
})

// show and hide faq answer


const faqs=document.querySelectorAll(".faq");
faqs.forEach(faq => {
faq.addEventListener("click",()=>{
faq.classList.toggle("open");

      //change icon
      const icon=faq.querySelector(".faq_icon i");
      if(icon.className ==="fa-solid fa-add"){
        icon.className ="fa-solid fa-minus";
      } else{
        icon.className ="fa-solid fa-add";
      }
})
});

//show hidden close button
const menu=document.querySelector(".nav_menu");
const menubtn=document.querySelector("#open-menu-btn");
const closebtn=document.querySelector("#close-menu-btn");
menubtn.addEventListener("click",()=>{
  menu.style.display="flex";
  closebtn.style.display="inline-block";
  menubtn.style.display="none";
})


//close menu nav
const closenav=()=>{
  menu.style.display="none";
  closebtn.style.display="none";
  menubtn.style.display="inline-block";
}
closebtn.addEventListener("click",closenav);
