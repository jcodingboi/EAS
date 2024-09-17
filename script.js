const container = document.querySelector('.container');
const startButton = document.querySelector('#start');

startButton.addEventListener('click', () => {
    let userInput = prompt('Enter the number of squares');
    createSquare(userInput);
});

function createSquare(userInput) {
    let squareCount = userInput;
  for (let i = 0; i < squareCount; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    // Attach the hover event listeners
    addHoverEffect(square);

    container.appendChild(square);
  }
}

function addHoverEffect(square) {
  // Add mouseover event to change color on hover
  square.addEventListener('mouseover', handleMouseOver);

  // Add mouseout event to reset the color after hover
  square.addEventListener('mouseout', handleMouseOut);
}

function handleMouseOver(event) {
  event.target.style.backgroundColor = 'blue'; // Change color on hover
}

function handleMouseOut(event) {
  event.target.style.backgroundColor = ''; // Reset to original color
}

createSquare();
