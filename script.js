//alert("hello");
// pratyush
// sharma
// var myName="pratyush";//initialization
// let a=10;
// const b=20;
// console.log(myName);//output
// console.log(a);
// console.log(b);
// console.log(`"hello my name is "` + myName + `"`);//template
// console.log("hello my name is\"\ " + myName + "\"\ ");//escape characters
// console.log(`hello my name is " ${myName} "`) ;
// let sum= a+b;
// console.log(`sum is ${sum}`);//sum
// let number1=5;
// let number2=15;
// console.log(number1);
// console.log(number2);
// let sum2=number1+number2;
// console.log(`sum is ${sum2}`);
// function add(x,y)
// {
//     let sum=x+y;
//     console.log(`sum is ${sum}`);
// }
// add(number1,number2);
// function double(x){
//   let mul=x*2;
//   console.log(`double is ${mul}`);
// }
// double(5);
// double(13);
// let number3=12;
// function multiply(x,y,z)
// {
//     let multiply=x*y*z;
//     console.log(`multiplication is ${multiply}`);
// }
// multiply(number1,number2,number3);
"use strict";
let secretNumber=Math.floor(Math.random() * 10 +1);
let highscore=0;
let high_a=0;
console.log(secretNumber);
let score = 5;
document.querySelector(".number").textContent=score;
document.querySelector(".score").textContent=highscore;
document.querySelector(".hscore").textContent=high_a;
console.log(document.querySelector(".message").textContent = "Enter a number and click on check");
document.querySelector(".check").addEventListener("click",
function()
{
  const guessNumber =Number (document.querySelector(".guess").value);
  console.log(guessNumber);
  //if no input
  if(score>=1){
  if(guessNumber==0){
    console.log(document.querySelector(".message").textContent = "No number!");
    }
    else if(guessNumber>10 || guessNumber<0)
    {
      console.log(document.querySelector(".message").textContent = "Invalid!");
      score = score-1;
    }
  else if(guessNumber===secretNumber)
{
  console.log(document.querySelector(".message").textContent = "Correct Guess!!!");
  switch(score){
    case 5:
      highscore= 500;
      break;
      case 4:
        highscore = 400;
      break;
      case 3:
        highscore = 300;
      break;
      case 2:
        highscore = 200;
      break;
      case 1:
        highscore = 100;
      break;
      default:
        highscore=0;
        break;
  }
  score = score-1;
  if(highscore>=high_a)
{
  high_a=highscore;
}
}
else if(guessNumber <= secretNumber)
{
  console.log(document.querySelector(".message").textContent = "Number is small");
  score = score-1;
}
else
{
  console.log(document.querySelector(".message").textContent = "Number is large");
  score = score-1;
}}
else{
  console.log(document.querySelector(".message").textContent = "Better luck next time");
    score = score-1;

  if(score<=0)
  {
    console.log(document.querySelector(".message").textContent = "Better luck next time");
    score=0;
  }
}

document.querySelector(".number").textContent=score;
document.querySelector(".hscore").textContent=high_a;
document.querySelector(".score").textContent=highscore;
}
)
document.querySelector(".reset").addEventListener("click",
function()
{
highscore=0;
score = 5;
secretNumber=Math.floor(Math.random() * 10 +1);
console.log(secretNumber);
document.querySelector(".number").textContent=score;
document.querySelector(".hscore").textContent=high_a;
document.querySelector(".score").textContent=highscore;
console.log(document.querySelector(".message").textContent = "Enter a number and click on check");
}
)

// console.log(typeof document.querySelector(".message".textContext));
// console.log(Number (document.querySelector(".message".textContext)));
