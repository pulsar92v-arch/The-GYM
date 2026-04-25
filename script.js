function toggleMenu(){
  let m=document.getElementById("mobileMenu");
  m.style.display = m.style.display==="block"?"none":"block";
}

// inquiry
function submitInquiry(){
  let data=JSON.parse(localStorage.getItem("inq"))||[];
  data.push({
    name:custName.value,
    phone:custPhone.value,
    plan:custPlan.value
  });
  localStorage.setItem("inq",JSON.stringify(data));
  alert("Submitted");
}

// auto plan select
function selectPlan(p){
  custPlan.value=p;
  document.getElementById("inquiry").scrollIntoView({behavior:'smooth'});
}

// dashboard
function goHome(){location="index.html"}

function showTab(t){
  document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
  document.getElementById(t).classList.add("active");
}

// members
let members=JSON.parse(localStorage.getItem("mem"))||[];

function addMember(){
  members.push({name:name.value});
  localStorage.setItem("mem",JSON.stringify(members));
  displayMembers();
}

function displayMembers(){
  memberList.innerHTML="";
  members.forEach(m=>{
    let li=document.createElement("li");
    li.textContent=m.name;
    memberList.appendChild(li);
  });
}
displayMembers();

// stock
let stock=JSON.parse(localStorage.getItem("stock"))||[];

function addStock(){
  stock.push({name:product.value,qty:quantity.value});
  localStorage.setItem("stock",JSON.stringify(stock));
  displayStock();
}

function displayStock(){
  stockList.innerHTML="";
  stock.forEach(s=>{
    let li=document.createElement("li");
    li.textContent=s.name+" "+s.qty;
    stockList.appendChild(li);
  });
}
displayStock();

// inquiry list
function displayInquiry(){
  let data=JSON.parse(localStorage.getItem("inq"))||[];
  inquiryList.innerHTML="";
  data.forEach(i=>{
    let li=document.createElement("li");
    li.textContent=i.name+" "+i.plan;
    inquiryList.appendChild(li);
  });
}
displayInquiry();
