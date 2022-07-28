const menuCircle = document.querySelector('.menu');
const containerPortfolio = document.querySelector('.container-main');
const titleProject = document.querySelector('.title-project');



menuCircle.addEventListener('mouseover', () => {

    containerPortfolio.style.filter = "blur(4px)";
    containerPortfolio.style.transition = "filter 0.5s";

    titleProject.style.filter = "blur(4px)";
    titleProject.style.transition = "filter 0.5s";

});

menuCircle.addEventListener('mouseleave', () => {

    containerPortfolio.style.filter = "";
    containerPortfolio.style.transition = "filter 0.5s";

    titleProject.style.filter = "";
    titleProject.style.transition = "filter 0.5s";
});