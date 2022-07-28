const menuCircle = document.querySelector('.menu');
const sections = document.querySelectorAll('section');
const main = document.querySelector('.container-main');
const titleProject = document.querySelector('.title-project');


menuCircle.addEventListener('mouseover', () => {
    for(const section of sections){
        section.style.filter = "blur(4px)";
        section.style.transition = "filter 0.5s";
    };
    
    main.style.filter = "blur(4px)";
    main.style.transition = "filter 0.5s";

    titleProject.style.filter = "blur(4px)";
    titleProject.style.transition = "filter 0.5s";
});

menuCircle.addEventListener('mouseleave', () => {
    for(const section of sections){
        section.style.filter = "";
        section.style.transition = "filter 0.5s";
    };
    main.style.filter = "";
    main.style.transition = "filter 0.5s";

    titleProject.style.filter = "";
    titleProject.style.transition = "filter 0.5s";
});