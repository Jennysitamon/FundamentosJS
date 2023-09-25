const body = document.querySelector('body');
const pink = document.getElementById('pink');
const purple = document.getElementById('purple');
const golden = document.getElementById('golden');

function getColor() {
    const pinkVal = Math.floor((pink.value / 100) * 255);
    const purpleVal = Math.floor((purple.value / 100) * 255);
    const goldenVal = Math.floor((golden.value / 100) * 255);
    const alpha = pink.value / 100;  // Valor de transparencia entre 0 y 1
    return `rgba(${pinkVal}, ${purpleVal}, ${goldenVal}, ${alpha})`;
}

function setColor() {
    body.style.background = getColor();
}

setColor();

pink.addEventListener('input', setColor);  // Cambiado 'change' a 'input'
purple.addEventListener('input', setColor);  // Cambiado 'change' a 'input'
golden.addEventListener('input', setColor);  // Cambiado 'change' a 'input'