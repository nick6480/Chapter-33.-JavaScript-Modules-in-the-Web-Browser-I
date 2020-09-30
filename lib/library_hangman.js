import {$} from '../lib/library.js';

var inputWord = $("inputWord");
var inputBtn = $("inputBtn");
var display = $("display");
var guessesLeft = $("guesses");
var input = $("userInput");
var wrapper2 = $("wrapper2");


let guesses = 7;

let word = [];

let wordU = [];

let userArray = [];

let keypress;

let indexes = [];

let allowedChar = [];

let timeThen;
let timeNow;



// Adder eventlistener til keyboard
const doSomething = function(){
  document.addEventListener("keypress", charCheck);
  inputBtn.addEventListener("click", pickWord);
};


function pickWord() {

  timeNow = (new Date()).getTime();
  word = inputWord.value;
  for (let i = 0; i < word.length; i++) {
    wordU[i] = "_";
    allowedChar = ["a","b","c","d","e","f","g","h","i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","æ","ø","å"];
  };

  inputWord.remove()
  inputBtn.remove()

  display.innerHTML = wordU.join(" ");
  guessesLeft.innerHTML = "Antal gæt tilbage: " + guesses;
};



function charCheck(e) {

  keypress = e.textContent = e.key;

  // Hvis keypressed er en af de tillate tegn
  if (allowedChar.includes(e.textContent = e.key) === true) {
    wordHint(keypress);

  };

  if (event.keyCode === 13) {
    pickWord();
  };
};

  function wordHint(e) {
      userInput = e;

      let removeKey = allowedChar.indexOf(userInput);
      allowedChar.splice(removeKey, 1);

        if (word.includes(userInput)) {

          for (let i = 0; i < word.length; i++) {
            if(word[i] === userInput) {
              wordU[i] = userInput;
            };
          };

          display.innerHTML = wordU.join(" ");

        } else {
            guesses--;
            userArray.push(userInput);

    };

  input.innerHTML = userArray;
  guessesLeft.innerHTML = "Antal gæt tilbage: " + guesses;

  winLose();

};


function winLose() {
  if (word === wordU.join("") || guesses === 0) {

    document.removeEventListener('keypress',  charCheck);

    document.addEventListener("keypress", function(){
      if (event.keyCode === 13) {
        reload()
      };
    });

    let button = document.createElement('BUTTON');

    button.addEventListener("click", reload);

    let text = document.createTextNode("Prøv Igen?");

    button.appendChild(text);

    wrapper2.appendChild(button); ;


    if (word === wordU.join("")) {
      guessesLeft.innerHTML = "You WIN!";

      timeThen = (new Date()).getTime();
      document.getElementById("showTime").innerHTML = ("Your time is: " + ((timeThen - timeNow)))

    } else if (guesses === 0) {
        guessesLeft.innerHTML = "You LOSE!";
    };
  };
};

function reload() {
  window.window.location.reload();
};


export {doSomething, pickWord, charCheck, wordHint, winLose, reload};
