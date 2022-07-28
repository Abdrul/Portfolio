const menuCircle = document.querySelector('.menu');
const sections = document.querySelectorAll('section');


menuCircle.addEventListener('mouseover', () => {
    for(const section of sections){
        section.style.filter = "blur(4px)";
        section.style.transition = "filter 0.5s";
    };
    
});

menuCircle.addEventListener('mouseleave', () => {
    for(const section of sections){
        section.style.filter = "";
        section.style.transition = "filter 0.5s";
    };
});