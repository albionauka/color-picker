const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D","E","F"]
const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
    let hexColor = "#";
    for(let i = 0; 1 < 6; i += 1) {
        hexColor += colors[getRandomNumber()];
    }
    console.log(hexColor)
})

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}