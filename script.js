function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

function submitInquiry() {
  const name = document.getElementById("custName").value;
  const phone = document.getElementById("custPhone").value;
  const plan = document.getElementById("custPlan").value;

  alert("Inquiry Submitted:\n" + name + "\n" + phone + "\n" + plan);
}
