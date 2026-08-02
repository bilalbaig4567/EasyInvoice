// =======================================
// EasyInvoice Pro Max V9
// app.js - Part 1
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    initTheme();

    initNavigation();

});

// ==========================
// Dark Mode
// ==========================

function initTheme(){

const btn=document.getElementById("themeBtn");

btn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

btn.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem("theme","light");

btn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

});

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

btn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

}

// ==========================
// Navigation
// ==========================

function initNavigation(){

const items=document.querySelectorAll(".sidebar li");

items.forEach(item=>{

item.addEventListener("click",()=>{

items.forEach(i=>i.classList.remove("active"));

item.classList.add("active");

});

});

}

console.log("✅ EasyInvoice Pro Max Loaded");
// =======================================
// Professional Navigation
// =======================================

const pages = {

navDashboard: "dashboardPage",

navInvoices: "invoicesPage",

navCustomers: "customersPage",

navProducts: "productsPage",

navReports: "reportsPage",

navSettings: "settingsPage"

};

Object.keys(pages).forEach(navId=>{

const nav=document.getElementById(navId);

if(nav){

nav.addEventListener("click",()=>{

Object.values(pages).forEach(page=>{

const el=document.getElementById(page);

if(el){

el.style.display="none";

}

});

document.getElementById(pages[navId]).style.display="block";

});

}

});
// =======================================
// Mobile Sidebar
// =======================================

const menuToggle = document.getElementById("menuToggle");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("overlay");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

sidebar.classList.add("open");
overlay.style.display="block";

});

}

if(closeSidebar){

closeSidebar.addEventListener("click",()=>{

sidebar.classList.remove("open");
overlay.style.display="none";

});

}

if(overlay){

overlay.addEventListener("click",()=>{

sidebar.classList.remove("open");
overlay.style.display="none";

});

}
// =======================================
// Dashboard Demo Data
// =======================================

function loadDashboard(){

document.getElementById("totalInvoices").textContent="12";

document.getElementById("totalCustomers").textContent="8";

document.getElementById("totalProducts").textContent="25";

document.getElementById("totalRevenue").textContent="$2,450";

const activity=document.getElementById("recentActivity");

if(activity){

activity.innerHTML=`

<p>✅ Invoice INV-001 Created</p>
<p>👤 Customer Ali Added</p>
<p>📦 Product Laptop Added</p>
<p>💰 Payment Received</p>

`;

}

}

document.addEventListener("DOMContentLoaded",loadDashboard);
// =======================================
// Version 12 - Live Invoice Preview
// =======================================

const invoiceBtn = document.getElementById("createInvoiceBtn");

if(invoiceBtn){

invoiceBtn.addEventListener("click",()=>{

const customer=document.getElementById("invoiceCustomer").value;
const email=document.getElementById("invoiceEmail").value;
const product=document.getElementById("invoiceProduct").value;
const price=Number(document.getElementById("invoicePrice").value);
const qty=Number(document.getElementById("invoiceQty").value);
const notes=document.getElementById("invoiceNotes").value;

if(!customer || !product || price<=0 || qty<=0){

alert("Please fill all required fields.");

return;

}
const now = new Date();

const invoiceDate = now.toLocaleDateString();

const invoiceTime = now.toLocaleTimeString();

const invoiceNo = "INV-" + Date.now();
const total=price*qty;

document.getElementById("invoicePreview").innerHTML=`

<h2>Invoice Preview</h2>

<hr><br>

<p><b>Customer:</b> ${customer}</p>

<p><b>Email:</b> ${email || "-"}</p>

<p><b>Product:</b> ${product}</p>

<p><b>Price:</b> $${price.toFixed(2)}</p>

<p><b>Quantity:</b> ${qty}</p>

<h3>Total: $${total.toFixed(2)}</h3>

<p><b>Notes:</b> ${notes || "No Notes"}</p>

`;

});

}
