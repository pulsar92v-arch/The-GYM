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
  alert("Submitted successfully");
}
