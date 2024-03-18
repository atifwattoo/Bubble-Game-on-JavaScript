function makeBubble() {
  var bubble = " ";

  for (let i = 1; i <= 108; i++) {
    var randNum = Math.floor(Math.random() * 10);
    // Math.random() is a function that gives random number between 0 and 1 like 0.99939 , 0.287372 etc. So we multiply Math.ramdom() function with 10 to get numbers which can be greater than 0 like 1.44334 ,2.223442. Remember the number may be 0.3234 even after multiply by 10
    // Math.floor() function gives integer part of the decimal number like 1,3,4,7
    // e.g  1= Math.floor(1.334345) , 4= Math.floor(4.3453234)
    bubble += `<div id="bubble">${randNum}</div>`;
  }

  document.querySelector("#panel-Bottom").innerHTML = bubble;
}

var time = 5;
function setTimer() {
  var timer = setInterval(function () {
    //setInterval(function(){} , time) is builtin function. Thats have one function and time in mili second
    if (time > 0) {
      time--;
      document.querySelector(".Timer").textContent = time;
    } else {
      document.querySelector("#panel-Bottom").innerHTML=` <h1 id="GameOver">Game Over</h1>`
      clearInterval(timer); // clearInterval() is builtin function. clearInterval() is used to close setInterval() function
    }
  }, 1000);
}

var hit;
function getNewHit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector(".hit").textContent = hit;
}

var score = 0;
function increseScore() {
  score += 10; // score= score+10
  document.querySelector(".score").textContent = score;
}

document.querySelector("#panel-Bottom")
  .addEventListener("click", function (details) {
    var storeClickedNumber=(Number(details.target.textContent) );
    if(storeClickedNumber===hit){
      increseScore();
      getNewHit();
      makeBubble();
      time=6

    }
  });

makeBubble();
setTimer();
getNewHit();
// increseScore();
