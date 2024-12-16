const cells = document.querySelectorAll('.cell');
const textDisplay = document.getElementById('text-display');
const resultDisplay = document.getElementById('result-display');
const generateButton = document.getElementById('generate-text');

const activeTexts = {};

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const group = cell.parentElement.dataset.group;

        document.querySelectorAll(`.grid-container[data-group="${group}"] .cell`)
            .forEach(item => item.classList.remove('active'));

        cell.classList.add('active');
        activeTexts[group] = cell.dataset.value;

        updateTextDisplay();
    });
});

function updateTextDisplay() {
    textDisplay.textContent = '';
    for (let group in activeTexts) {
        textDisplay.textContent += `${group}:\n${activeTexts[group]}\n\n`;
    }
}

generateButton.addEventListener('click', () => {
    resultDisplay.textContent = '';
    for (let group in activeTexts) {
        resultDisplay.textContent += `Учень/учениця ${activeTexts[group]}\n\n`;
    }
});
