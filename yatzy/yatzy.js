var dice = new Array(0,0,0,0,0);
var hold = new Array(false, false, false, false, false);
var turn = 0;

let rules = document.getElementById("rules");

function rollDice() {
    if (this.turn<3){
        for (i = 0; i < 5; i++) {
            if (!hold[i]) {
                dice[i] = Math.floor(Math.random() * 5) + 1;
                document.getElementById("dice" + (i+1)).innerHTML = dice[i]
            }
        }
        this.turn++;
    }
    else {
        this.rules.innerHTML = "Ikke flere kast";
    }

}

function resetBoard() {
    this.rules.innerHTML = "";
    for(let i = 1; i < 6; i++) {
        let dice = document.getElementById("dice" + i)
        dice.innerHTML = "";
        dice.style.backgroundColor = null;
    }
}

function toggleHold(event, i) {
    isHold = hold[i]
    event.target.style.backgroundColor = isHold ? null : 'lightgreen';
    this.hold[i] = !isHold;
}

function resetDices() {
    this.turn = 0;
    this.dice = new Array(0,0,0,0,0);
    this.hold = new Array(0,0,0,0,0);
    this.resetBoard();
}





let navne = [];

const addNavn = (ev) => {
  ev.preventDefault(); //to stop the form submitting
  let navn = {
    //id: Date.now(),
    person: document.getElementById("person").value,
    etere: document.getElementById("1'ere").value,
    toere: document.getElementById("2'ere").value,
    treere: document.getElementById("3'ere").value,
    firere: document.getElementById("4'ere").value,
    femmere: document.getElementById("5'ere").value,
    seksere: document.getElementById("6'ere").value,
    antal: document.getElementById("antal").value,
    bonus: document.getElementById("bonus").value,

    "1 par": document.getElementById("1 par").value,
    "2 par": document.getElementById("2 par").value,
    "3 ens": document.getElementById("3 ens").value,
    "4 ens": document.getElementById("4 ens").value,
    "Lille straight": document.getElementById("Lille straight").value,
    "Stor straight": document.getElementById("Stor straight").value,
    Hus: document.getElementById("Hus").value,
    Chancen: document.getElementById("Chancen").value,
    YATZY: document.getElementById("YATZY").value,
    "Samlet Score": document.getElementById("Samlet Score").value,
  };
  navne.push(navn);
  document.forms[0].reset(); // sletter input så inputfeldter er klar til næste spil
  document.querySelector(".form").reset();

  //viser diverse navn+score på dokumentet
  console.warn("added", { navne });
  let pre = document.querySelector("#msg #pre");
  pre.textContent = "\n" + JSON.stringify(navne, "\t", 2);

  //Gemmer alt info i localStorage
  localStorage.setItem("MyNavnList", JSON.stringify(navne));
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addNavn);
});

let navne2 = [];

const addNavn2 = (ev) => {
  ev.preventDefault(); //to stop the form submitting
  let navn2 = {
    //id: Date.now(),
    person: document.getElementById("person1").value,
    etere: document.getElementById("1'ere1").value,
    toere: document.getElementById("2'ere1").value,
    treere: document.getElementById("3'ere1").value,
    firere: document.getElementById("4'ere1").value,
    femmere: document.getElementById("5'ere1").value,
    seksere: document.getElementById("6'ere1").value,
    antal: document.getElementById("antal1").value,
    bonus: document.getElementById("bonus1").value,

    "1 par": document.getElementById("1 par1").value,
    "2 par": document.getElementById("2 par1").value,
    "3 ens": document.getElementById("3 ens1").value,
    "4 ens": document.getElementById("4 ens1").value,
    "Lille straight": document.getElementById("Lille straight1").value,
    "Stor straight": document.getElementById("Stor straight1").value,
    Hus: document.getElementById("Hus1").value,
    Chancen: document.getElementById("Chancen1").value,
    YATZY: document.getElementById("YATZY1").value,
    "Samlet Score": document.getElementById("Samlet Score1").value,
  };
  navne2.push(navn2);
  document.forms[0].reset(); // sletter input så inputfeldter er klar til næste spil
  document.querySelector(".form1").reset();

  //viser diverse navn+score på dokumentet
  console.warn("added", { navne2 });
  let pre = document.querySelector("#msg #pre1");
  pre.textContent = "\n" + JSON.stringify(navne2, "\t", 2);

  //Gemmer alt info i localStorage
  localStorage.setItem("MyNavn2List", JSON.stringify(navne2));
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn1").addEventListener("click", addNavn2);
});
