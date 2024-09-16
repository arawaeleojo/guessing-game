//index.js

let input = document.querySelector("#input");
let paragraph1 = document.querySelector(".trial");
let paragraph2 = document.querySelector(".trial1");
let button = document.getElementById("enter").addEventListener("click", submitted);
let min = 0;
let max = 5;
let guess = Math.floor(Math.random() * max + min);
let text = document.getElementById("text");
let trials = 1;
let levels = 2;
let startOver;

// check value after submission
function submitted() {
    console.log(guess)
    if (input.value < guess) {
        document.getElementById("texts").innerHTML = "This is too small";
    } else {
        document.getElementById("texts").innerHTML = "this is too big";
    }
    if (input.value == guess) {
        none();
        text.innerHTML = "Congratulations You Got It Right !";
        text.classList.add("green");
        document.getElementById("texts").innerHTML = "";
        document.getElementById("enter").style.display = "none";
        continueGame();
    } else if (trials === 3) {
        text.innerHTML = "The correct number was " + guess;
        document.getElementById("texts").innerHTML = "";
        document.getElementById("enter").style.display = "none";
        Redo();
    } else {
        text.innerHTML = "Try Again!"
    }
    if (input.value == "") {
        text.innerHTML = "";
        document.getElementById("texts").innerHTML = ""
    }
    trials++;
    input.value = '';
    input.focus();
}

//page after correct submission
function Continue() {
    show()
    index = 2;
    max = max + index;
    guess = Math.floor(Math.random() * max);
    trials = 1;
    document.getElementById("number").innerHTML = "I'm thinking of a number from 0 - " + max + ". Can you guess the number ?";
    text.classList.remove("green")
    document.getElementById("text").innerHTML = "";
    document.getElementById("texts").innerHTML = "";
    document.getElementById("enter").style.display = "inline-block";
    input.disabled = false;
    input.value = '';
    input.focus();
    refreshed();
    if (levels == 12) {
        levels = 2;
        min = 1;
        max = 5;
        guess = Math.floor(Math.random() * max);
        input.style.display = "none";
        paragraph1.style.display = "none";
        paragraph2.style.display = "none";
        document.getElementById("text").innerHTML = "CONGRATULATIONS, you're the champion!";
        document.getElementById("texts").innerHTML = "Would you like to play another round?";
        document.getElementById("enter").style.display = "none";
        setGameOver();
        document.getElementById("number").innerHTML = "I'm thinking of a number from 0 - " + max + ". Can you guess the number ?"; text.classList.remove("green")
    }
}

//continue after correct submission
function continueGame() {
    input.disabled = true;
    PlayAgainButton = document.createElement('button');
    PlayAgainButton.textContent = 'Level ' + levels++;
    document.querySelector(".container").append(PlayAgainButton);
    PlayAgainButton.addEventListener('click', Continue);
    if (levels == 12) {
        PlayAgainButton.textContent = "You Won!";
    }
}


//page after wrong entry
function Redo() {
    none();
    resetButton = document.createElement('button');
    resetButton.textContent = "Redo this level";
    document.querySelector(".container").append(resetButton);
    resetButton.addEventListener('click', redoGame);
}

//redo level of wrong entry
function redoGame() {
    guess = Math.floor(Math.random() * max);
    trials = 1;
    show();
    document.getElementById("number").innerHTML = "I'm thinking of a number from 0 - " + max + ". Can you guess the number ?";
    text.classList.remove("green")
    document.getElementById("text").innerHTML = "";
    document.getElementById("texts").innerHTML = "";
    document.getElementById("enter").style.display = "inline-block";
    input.disabled = false;
    input.value = '';
    input.focus();
    refresh();
}

//page after winning the game
function setGameOver() {
    input.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Play Again";
    document.querySelector(".container").append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

//resets the game
function resetGame() {
    trials = 1;
    show();
    text.classList.remove("green")
    const resetParas = document.querySelectorAll('.resultParas p');
    document.getElementById("text").innerHTML = "";
    document.getElementById("texts").innerHTML = "";
    document.getElementById("enter").style.display = "inline-block";
    input.disabled = false;
    input.value = '';
    input.focus();
    refresh();
}

function refresh() {
    resetButton.style.display = "none";
}

function refreshed() {
    PlayAgainButton.style.display = "none"
}

//this removes the inputs and paragraphs
function none() {
    input.style.display = "none";
    paragraph1.style.display = "none";
    paragraph2.style.display = "none";
}

//this shows the inputs and paragraphs
function show() {
    input.style.display = "inline";
    paragraph1.style.display = "block";
    paragraph2.style.display = "block";
}