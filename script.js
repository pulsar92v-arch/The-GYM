function toggleMenu(){
  document.getElementById("mobileMenu").classList.toggle("active");
}

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function selectPlan(p){
  document.getElementById("plan").value=p;
  scrollToSection("inquiry");
}

function submit(){
  alert("Thanks! We will contact you.");
}

/* SCROLL ANIMATION */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade").forEach(el => {
    let top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("show");
    }
  });
});
