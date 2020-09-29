let a = Math.floor(Math.random() * (1000)) + 1;
let i = 0;
let submitnumber = document.getElementById("submitnumber");
let showCount = document.getElementById("showcount");
let timeNow;
let timeThen;

function startCount() {
    timeNow = (new Date()).getTime();
}


function inputFunc() {
    let b = document.getElementById("inputnumber").value;
    timeThen = (new Date()).getTime();

    while (b !== a) {
        if (b == a) {
            document.getElementById("showresult").innerHTML = ("You win!");
            document.getElementById("showScore").innerHTML = "Your score is: " + ((timeThen - timeNow) * 0.01 + (i * 1000));
          break;

        } else if (b < 1 || b > 1000) {
            alert("Your number must be betwen 1-1000");
            location.reload();
        } else if (b > a) {
            document.getElementById("showresult").innerHTML = (`The number is lower than ${b}`); 
          break;
        } else (b < a)
            document.getElementById("showresult").innerHTML = (`The number is higher than ${b}`);
        break;
        }

    i++;
    if (i === 10 && b !== a)
        alert("you have used your tries, click try again!");

        console.log(`${b}`);
        document.getElementById("showcount").innerHTML = "Number of tries: " + i;
        } 

    function resetFunc() {
        location.reload();
    }

    console.log("guess the number: " + a);
