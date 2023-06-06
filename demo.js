var ele = document.querySelector('.div12');
function toggleMenu() {
    ele.classList.toggle('show');
    console.log(ele);
  }
 document.querySelector('.menu').addEventListener("click",toggleMenu);
  
 var close=document.querySelector('.div12');
 function closeMenu(){
    close.classList.remove('show');
 }
 document.querySelector('.close').addEventListener("click",closeMenu);

 
document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !ele.contains(event.target)) {
      ele.classList.remove('show');
    }
  });

var today=new Date();
var date=document.getElementById('txt');
date.innerHTML=today;