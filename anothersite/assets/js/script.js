const point = document.querySelector('#header .top-btn .btn');
const cat = document.querySelector('body');

point.addEventListener('click',()=>{
    point.classList.toggle('active');
    cat.classList.toggle('active');
    
});