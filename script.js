document.addEventListener('DOMContentLoaded', function () {
    // this Get the container div
    let container = document.querySelector('.container');

    // This Creates a 16x16 grid of square divs
    for (let i = 0; i < 16 * 16; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
        container.appendChild(gridSquare);
    }
});