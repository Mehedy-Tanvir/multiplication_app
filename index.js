const score = document.querySelector('#score');
const question = document.querySelector('#question');
const input = document.querySelector('#input');
const btn = document.querySelector('#submit');
const form = document.querySelector('#form');
const rand1 = Math.floor((Math.random() * 10) + 1);
const rand2 = Math.floor((Math.random() * 10) + 1);


question.innerHTML = `What is ${rand1} multiply by ${rand2}?`;
const correctAns = rand1 * rand2;
let currentScore = JSON.parse(localStorage.getItem('currentScore'));
if (!currentScore) {
    currentScore = 0;
}
if (currentScore < 10 && currentScore > -1) {
    score.innerText = `Score: 0${currentScore}`;
} else {
    score.innerText = `Score: ${currentScore}`;
}

form.addEventListener('submit', () => {
    const userInput = parseInt(input.value);

    if (userInput === correctAns) {
        currentScore = currentScore + 1;
        UpdateLocalStorage();

    } else {
        currentScore = currentScore - 1;
        UpdateLocalStorage();

    }

});

function UpdateLocalStorage() {
    localStorage.setItem('currentScore', JSON.stringify(currentScore));
}


