// Define the map
const map = [
    ['🌳', '🌳', '🌳', '🌳', '🌳'],
    ['🌳', '🏰', '🌳', '🌳', '🌳'],
    ['🌳', '🌳', '🌳', '🏞️', '🌳'],
    ['🌳', '🌳', '🏞️', '🌳', '🌳'],
    ['🌳', '🌳', '🌳', '🌳', '🌳'],
];

// Define the player's starting position
let playerX = 1;
let playerY = 1;

// Define the narrator's messages
const narratorMessages = {
    '🌳': 'You are in a dense forest.',
    '🏰': 'You see a castle in the distance.',
    '🏞️': 'You are in a wide open field.',
};

// Get the input and output elements from the DOM
const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');
const mapElement = document.getElementById('map');

// Display the initial location
outputElement.innerHTML += `<p>${narratorMessages[map[playerY][playerX]]}</p>`;
updateMap();

// Function to move the player
function move(direction) {
    switch (direction) {
        case 'north':
            if (playerY > 0) {
                playerY--;
                outputElement.innerHTML += `<p>You move north.</p>`;
            } else {
                outputElement.innerHTML += `<p>You can't go any further north.</p>`;
            }
            break;
        case 'south':
            if (playerY < map.length - 1) {
                playerY++;
                outputElement.innerHTML += `<p>You move south.</p>`;
            } else {
                outputElement.innerHTML += `<p>You can't go any further south.</p>`;
            }
            break;
        case 'east':
            if (playerX < map[0].length - 1) {
                playerX++;
                outputElement.innerHTML += `<p>You move east.</p>`;
            } else {
                outputElement.innerHTML += `<p>You can't go any further east.</p>`;
            }
            break;
        case 'west':
            if (playerX > 0) {
                playerX--;
                outputElement.innerHTML += `<p>You move west.</p>`;
            } else {
                outputElement.innerHTML += `<p>You can't go any further west.</p>`;
            }
            break;
    }
    outputElement.innerHTML += `<p>${narratorMessages[map[playerY][playerX]]}</p>`;
    updateMap();
}

// Function to look around
function look() {
    outputElement.innerHTML += `<p>${narratorMessages[map[playerY][playerX]]}</p>`;
    updateMap();
}

// Function to update the mini-map
// Function to update the mini-map
function updateMap() {
    let mapHtml = '';
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (y === playerY && x === playerX) {
                mapHtml += '😀';
            } else {
                mapHtml += map[y][x];
            }
        }
        mapHtml += '<br>';
    }
    mapElement.innerHTML = mapHtml;
}

// List of available commands
const commands = [
    'north',
    'south',
    'east',
    'west',
    'look',
];

// Function to handle user input
inputElement.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const inputText = inputElement.value.trim().toLowerCase();
        inputElement.value = '';

        if (inputText === 'help') {
            outputElement.innerHTML += `
          <p>Available commands:</p>
          <ul>
            ${commands.map(command => `<li>${command}</li>`).join('')}
          </ul>
        `;
            return;
        }

        if (!commands.includes(inputText)) {
            outputElement.innerHTML += `<p>Unknown command: ${inputText}</p>`;
            return;
        }

        switch (inputText) {
            case 'north':
            case 'south':
            case 'east':
            case 'west':
                move(inputText);
                break;
            case 'look':
                look();
                break;
        }
    }
});

// Function to handle user input
inputElement.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const command = inputElement.value.toLowerCase();
        inputElement.value = '';
        outputElement.innerHTML += `<p><strong>${command}</strong></p>`;
        switch (command) {
            case 'move north':
                move('north');
                break;
            case 'move south':
                move('south');
                break;
            case 'move east':
                move('east');
                break;
            case 'move west':
                move('west');
                break;
            case 'look':
                look();
                break;
        }
    }
});