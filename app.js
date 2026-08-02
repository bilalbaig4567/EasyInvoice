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
