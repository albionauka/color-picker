const colors = ["green", "red", "slategrey", "rgb(52, 125, 235)"]
const color = document.querySelector('.color');
const btn = document.getElementById('btn');
btn.addEventListener("click", () => {
    let randomNumber = getRandomNumber()
    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber () {
    return Math.floor(Math.random()* colors.length);
}