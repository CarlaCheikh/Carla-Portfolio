// show menu

const hamburger= document.querySelector(".hamburger");
const navMenu = document.getElementById("nav-menu"),
    navHam = document.getElementById("nav-hamburger"),
    navClose = document.getElementById("nav-close");

if(navHam) {
    navHam.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    navClose.classList.remove("hidden");
    navHam.style.display = "none";
})
}
 
  
if(navClose) {
    navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navClose.classList.add("hidden");
    navHam.style.display = "block";
})
}
 
// remove menu when we click on a link
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
    navMenu.classList.remove("show-menu");
    navClose.classList.add("hidden");
    navHam.style.display = "block";
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//hover on project

const firstProject = document.querySelector(".first-project");
const secondProject = document.querySelector(".second-project");
const firstProjectHover = document.querySelector(".first-project-hover");
const secondProjectHover  = document.querySelector(".second-project-hover");


firstProject.addEventListener("mouseover", (e) => { 

    firstProjectHover.classList.remove("hidden");
})

firstProject.addEventListener("mouseout", (e) => { 

    firstProjectHover.classList.add("hidden");
})

secondProject.addEventListener("mouseover", (e) => { 

    secondProjectHover.classList.remove("hidden");
})

secondProject.addEventListener("mouseout", (e) => { 

    secondProjectHover.classList.add("hidden");
})

//  SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        };
    })
}
window.addEventListener('scroll', scrollActive);


