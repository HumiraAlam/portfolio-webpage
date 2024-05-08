const navToggle = document.querySelector(".nav-toggle");
const nalLinks = document.querySelectorAll(".nav__link")

navToggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-open');
});

nalLinks.forEach(link => {
    link.addEventListener("click", ()=>{
        document.body.classList.remove("nav-open")
    })
})