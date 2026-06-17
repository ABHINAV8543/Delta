let gameSeq = [];
let idx=0;
let isStarted = false;
let highestLevel = 0;
let currLevel = 0;
let buttons = ["red", "yellow", "blue", "green"];

document.addEventListener("keypress", () => {
  if(isStarted==false){
    isStarted=true;

    levelUp();
  }
});

function levelUp(){
  currLevel+=1;
  idx=0;

  let h2=document.querySelector("h2");
  h2.innerText=`Level ${currLevel}`;

  let idxBtn=Math.floor(Math.random()*4);
  gameSeq.push(buttons[idxBtn]);

  let btn=document.querySelector(`.${buttons[idxBtn]}`);
  btn.classList.add("white");
  setTimeout(() => {
    btn.classList.remove("white");
  }, 500);

  check();
}

function gameOver(){
  idx=0;
  gameSeq=[];
  let body=document.querySelector("body");
  body.classList.add("red");
  setTimeout(() => {
    body.classList.remove("red");
  }, 500);

  if(highestLevel<currLevel) highestLevel=currLevel;

  let h2=document.querySelector("h2");
  h2.innerHTML=`Game Over! Your score was: ${currLevel} <br> Highest Score: ${highestLevel} <br> Press any key to start again...`;

  currLevel=0;
  isStarted=false;
}

function check(){
  let btns=document.querySelectorAll(".btn");
  for(btn of btns){
    btn.addEventListener("click", checkIdx);
  }
}

function checkIdx(){
  let btn=this;
  let currBtn=btn.getAttribute("id");
  btn.classList.add("black");
  setTimeout(() => {
    btn.classList.remove("black");
  }, 500);
  if(currBtn==gameSeq[idx]){
    idx+=1;
    if(idx==gameSeq.length) levelUp();
  }
  else gameOver();
}