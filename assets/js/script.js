/*let box = document.getElementsByClassName("box")
let over = false
let turn = "X"
let successSound = new Audio("assets/sounds/success.mp3")
let failSound = new Audio("assets/sounds/fail.mp3")
let ticSound = new Audio("assets/sounds/tic1.mp3")
ticSound.playbackRate=1.7;
function changeTurn() {
    turn = turn === "X" ? "O" : "X"
}





function checkWin() {

    let winPossibility = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]
    let boxitem = document.querySelectorAll(".boxitem")

    winPossibility.forEach(ele => {
        if ((boxitem[ele[0]].innerHTML == boxitem[ele[1]].innerHTML) && (boxitem[ele[1]].innerHTML == boxitem[ele[2]].innerHTML) && (boxitem[ele[0]].innerHTML != "")) {
            over = true
            boxitem[ele[0]].style.cssText = "color:white; font-size: 8vw;;  text-shadow:0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa;"
            boxitem[ele[1]].style.cssText = "color:white; font-size: 8vw;;  text-shadow:0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa;"
            boxitem[ele[2]].style.cssText = "color:white; font-size: 8vw;;  text-shadow:0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa;"
            document.getElementById("alertturn").innerHTML = `${boxitem[ele[0]].innerHTML} is won`
            window.navigator.vibrate(500);
            successSound.play()
        }

    })
    if ((over == false) && boxitem[0].innerHTML != "" && boxitem[1].innerHTML != "" && boxitem[2].innerHTML != "" && boxitem[3].innerHTML != "" && boxitem[4].innerHTML != "" && boxitem[5].innerHTML != "" && boxitem[6].innerHTML != "" && boxitem[7].innerHTML != "" && boxitem[8].innerHTML != "") {
        document.getElementById("alertturn").innerHTML = `Drow`
        failSound.play()
    }
}




Array.from(box).forEach(ele => {
    let boxitem = ele.getElementsByClassName("boxitem")[0]
    ele.addEventListener("click", () => {
      
        if (boxitem.innerHTML == "" && over == false) {
            ticSound.play()
            if (turn == "X") {
                boxitem.style.color = "red"
            } else if (turn == "O") {
                boxitem.style.color = "yellow"
            }
            boxitem.innerHTML = turn
            changeTurn()
            
            document.getElementById("alertturn").innerHTML = `Turn For ${turn}`
            checkWin()
        }
    })
})


let reset = document.getElementById("reset")
reset.addEventListener("click", () => {
    successSound.currentTime=0;
    successSound.pause();
    failSound.currentTime=0;
    failSound.pause();
    over = false
    turn = "X"
    let boxitem = document.getElementsByClassName('boxitem')
    for (i = 0; i < 9; i++) {
        boxitem[i].innerHTML = ""
        
        over = false
        document.getElementById("alertturn").innerHTML = "Turn For X"
        boxitem[i].style.cssText = "color:white; font-size: 8vw;  text-shadow:0 0 0px #0000,0 0 0px #0000,0 0 px #000,0 0 0px #0000,0 0 0px #000,0 0 0px #0000,0 0 0px #0000,0 0 0px #0000;"
    }

})*/



let box = document.getElementsByClassName("box");
let over = false;
let turn = "X";
let successSound = new Audio("assets/sounds/success.mp3");
let failSound = new Audio("assets/sounds/fail.mp3");
let ticSound = new Audio("assets/sounds/tic1.mp3");
ticSound.playbackRate = 1.7;

function changeTurn() {
  turn = turn === "X" ? "O" : "X";
}

function checkWin() {
  let winPossibility = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];
  let boxitem = document.querySelectorAll(".boxitem");

  winPossibility.forEach((ele) => {
    if (
      boxitem[ele[0]].innerHTML == boxitem[ele[1]].innerHTML &&
      boxitem[ele[1]].innerHTML == boxitem[ele[2]].innerHTML &&
      boxitem[ele[0]].innerHTML != ""
    ) {
      over = true;
      boxitem[ele[0]].style.cssText =
        "color:white; font-size: 8vw;;  text-shadow:0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa;";
      boxitem[ele[1]].style.cssText =
        "color:white; font-size: 8vw;;  text-shadow:0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa;";
      boxitem[ele[2]].style.cssText =
        "color:white; font-size: 8vw;;  text-shadow:0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa;";
      document.getElementById("alertturn").innerHTML = `${boxitem[ele[0]].innerHTML} is won`;
      window.navigator.vibrate(500);
      successSound.play();
    }
  });

  if (
    !over &&
    boxitem[0].innerHTML != "" &&
    boxitem[1].innerHTML != "" &&
    boxitem[2].innerHTML != "" &&
    boxitem[3].innerHTML != "" &&
    boxitem[4].innerHTML != "" &&
    boxitem[5].innerHTML != "" &&
    boxitem[6].innerHTML != "" &&
    boxitem[7].innerHTML != "" &&
    boxitem[8].innerHTML != ""
  ) {
    document.getElementById("alertturn").innerHTML = `Draw`;
    failSound.play();
  }
}

function makeAIMove() {
  let emptyCells = [];
  const boxitem = document.querySelectorAll(".boxitem");
  boxitem.forEach((cell, index) => {
    if (cell.innerHTML === "") {
      emptyCells.push(index);
    }
  });

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const selectedCell = emptyCells[randomIndex];

  setTimeout(() => {
    if (selectedCell !== undefined) {
      boxitem[selectedCell].innerHTML = "O"; // Assuming AI plays 'O'
      changeTurn();
      document.getElementById("alertturn").innerHTML = `Turn For ${turn}`;
      checkWin();
    }
  }, 500);
}

Array.from(box).forEach((ele) => {
  let boxitem = ele.getElementsByClassName("boxitem")[0];
  ele.addEventListener("click", () => {
    if (boxitem.innerHTML == "" && !over && turn === "X") {
      ticSound.play();
      boxitem.style.color = "red";
      boxitem.innerHTML = turn;
      changeTurn();
      document.getElementById("alertturn").innerHTML = `Turn For ${turn}`;
      checkWin();
      makeAIMove();
    }
  });
});

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  successSound.currentTime = 0;
  successSound.pause();
  failSound.currentTime = 0;
  failSound.pause();
  over = false;
  turn = "X";
  let boxitem = document.getElementsByClassName("boxitem");
  for (i = 0; i < 9; i++) {
    boxitem[i].innerHTML = "";
    over = false;
    document.getElementById("alertturn").innerHTML = "Turn For X";
    boxitem[i].style.cssText =
      "color:white; font-size: 8vw;  text-shadow:0 0 0px #0000,0 0 0px #0000,0 0 px #000,0 0 0px #0000,0 0 0px #000,0 0 0px #0000,0 0 0px #0000,0 0 0px #0000;";
  }
});






