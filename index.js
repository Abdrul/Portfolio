const menuCircle = document.querySelector('.menu');


menuCircle.addEventListener('mouseover', () => {
    console.log("hello");
    document.body.style.backgroundColor = "black"
})

menuCircle.addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = ""

})