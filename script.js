const colorBox = document.getElementById('color-box');
const colorCode = document.getElementById('color-code');
const newColorButton = document.getElementById('new-color');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function displayRandomColor() {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
}

newColorButton.addEventListener('click', displayRandomColor);
displayRandomColor(); // Show a random color when the page loads
