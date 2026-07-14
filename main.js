var swiper = new Swiper(".home", {
    loop: true, 
    
    // هاد السطر هو اللي رح يعطيك النعومة بالانتقال (كل ما زاد الرقم بتصير الحركة أبطأ وأنعم)
    speed: 800, 

    autoplay: {
        delay: 2000, // بتقدر تخليها 4000 إذا بدك الصورة تطول أكثر على الشاشة
        disableOnInteraction: false, 
    },
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}