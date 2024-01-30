document.addEventListener('DOMContentLoaded', function () {
    function createGrid(size) {
        // Get the container div
        let container = document.querySelector('.container');
        container.innerHTML = ''; // Clear the existing grid

        for (let i = 0; i < size * size; i++) {
            let gridSquare = document.createElement('div');
            gridSquare.className = 'grid-square';
            container.appendChild(gridSquare);
        }
    }

    let newGridButton = document.getElementById('new-grid-button');
    newGridButton.addEventListener('click', function () {
        let gridSize = prompt('Enter the number of squares per side (max 100):');
        gridSize = parseInt(gridSize);

        // Validate user input and create a new grid
        if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
            createGrid(gridSize);
        } else {
            alert('Invalid input. Please enter a number between 1 and 100.');
        }
    });
});
