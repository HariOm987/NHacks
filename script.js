let lives, maxLives, letterFound, history, allLetters, ourLetters, word, rnd;

let words = [['Rome', 'Capital of Italy'], ['Banana', 'Yellow fruit'], ['Javascript', 'Programming language'], ['Budapest', 'Capital of Hungary'], ['Carbonara', 'Italian food'], ['Guitar', 'String instrument'], ['Telephone', 'Electrical communication device'], ['Raspberry', 'Sweet, red fruit'], ['Backpack', 'A bag you wear on your back']];
let letterLines = document.querySelector('#word-lines');

//Choose random word-hint pair, create lines for the letters
let randomNumber = () => {
    rnd = Math.floor(Math.random() * Math.floor(words.length));
    return rnd;
}

let random = (words) => {
    randomNumber();
    let currentWord = words[rnd][0];
    for (let i = 0; i<currentWord.length; i++) {
        var div = document.createElement('div');
        letterLines.appendChild(div);
        div.classList.add('line');
    }
    return currentWord;
};

word = random(words);

//Validate input field (only one letter), get input (Guess - event listener), compare with currentWord's letters
const input = document.querySelector('#input-field');
const guess = document.querySelector('#button-guess');

lives = document.querySelector('#lives');
maxLives = 10;
lives.textContent = `You have ${maxLives} lives.`;
history = '';
allLetters = word.length;
ourLetters = 0;
let showLetter = document.querySelectorAll('.line');

guess.addEventListener('click', game);
input.addEventListener('keyup', ent);

function ent(e) {
    if (e.keyCode === 13) {
        game();
    }
};

function game() {
    let letters = /^[A-Za-z]+$/;
    history.split('');
    let correct = [];

    if (history.indexOf(input.value.toUpperCase())==-1) {
        if (input.value.match(letters)) {
            for (let i = 0; i < word.length; i++) {
                if (input.value.toUpperCase() == word[i].toUpperCase()) {
                    // Print letter to the screen
                    let letterContainer = document.createElement('div');
                    let myLetter = document.createTextNode(input.value.toUpperCase());
                    
                    if (showLetter[i].firstChild == undefined) {
                       showLetter[i].appendChild(letterContainer);
                        letterContainer.appendChild(myLetter);
                        letterContainer.classList.add('container');
                    }
                    letterFound = true;
                    correct.push(input.value.toUpperCase());
                } else if (correct.length <= 0){
                    letterFound = false;
                }
            };
        } else {
            alert('Enter a valid letter!');
        }
    
       if (letterFound == false) {
            document.querySelector('.wrong').textContent += input.value.toUpperCase();
            maxLives--;
            if (maxLives == 0) {
                alert('You ran out of lives!');
                guess.removeEventListener('click', game);
                input.removeEventListener('keyup', ent);
            }
            lives.textContent = `You have ${maxLives} lives.`;
        } else {
            ourLetters++;
            if (ourLetters == allLetters) {
                alert(`Congrats! You found the word: ${word.toUpperCase()}!`);
                guess.removeEventListener('click', game);
            }
        }
    }
    history += input.value.toUpperCase();
    input.value = '';
};

//Show hint
const hint = document.querySelector('#button-hint');
hint.addEventListener('click', function(){
    document.querySelector('.hint').textContent = words[rnd][1];
});

//New game
const newGame = document.querySelector('#button-new');
newGame.addEventListener('click', function(){
    document.location.reload(true);
});