// const point = document.querySelector('#header .top-btn .btn');
// const cat = document.querySelector('body');

// point.addEventListener('click',()=>{
//     point.classList.toggle('active');
//     cat.classList.toggle('active');
    
// });

const slide = document.querySelectorAll('.slide-contant');

let countEle = 1;

setInterval(() => {
    countEle++;
    const currentEle =document.querySelector(".current");
    currentEle.classList.remove("current");
    if(countEle>slide.length){
        slide[0].classList.add("current");
        countEle = 1;
    }else{
        currentEle.nextElementSibling.classList.add("current");
    }
    
}, 2000);