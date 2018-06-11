let  rl  =  require('readline-sync');

function Player(name, score) {
  this.name = name;
  this.score = score;
}
let highScore = [];
var length = 0;

function home(){
 console.log("\n\n\t\tMain Menu:");
 console.log("(1) Scoreboard");
 console.log("(2) Instructions");
 console.log("(3) New Player");
 console.log("(4) Play Game");
 console.log("(5) Quit Game");
 let q = rl.question("What Would You Like To Do? [1-5]:  ");

 switch(q){
   case "1":
    board();
    break;
  case "2":
   instructions();
   break;
  case "3":
    let name = rl.question("What's Your Name? ");
    console.log(`Looking Forward to Beating you, ${name}. Lets Get Started HAHAHAHAH\t\t\t`);
    makePlayer(name, 0);
    home();
    break;
  case "4":
    startGame();
    break;
  case "5":
    break;
  default:
    console.log(`Im Sorry, I Didn't Get \"${q}\", Please Try again`);
    home();
    break;
 }


}
function instructions(){
  console.log("Welcome to Math+. Here you can practice your calculation skills by competing against others. When you enter, you will have the option to play a game in 3 different levels. A correct answer on level I will earn you 5 point, while level II will earn you 10 points, and level III will earn you 20 point. Practice you math skill, and have fun!!! :)");
  let q = rl.question("Press [Enter] to Continue");
  home();
}
function makePlayer(name, score){
  let dummy = new Player(name, score);
  highScore.push(dummy);
  length++;
}
function board(){
  highScore.sort(function(a,b){
      return a.age-b.age;
  });
  console.log("\n\n\tTop 10 Score Board:");
  console.log("   Name\t\t\tScore");
  // let length = highScore.length;
  for (let i = 0; i < length; i++){
    console.log(`${i+1}. ${highScore[i].name}:\t\t ${highScore[i].score}`);
    if (i == 9){
      break;
    }
  }
  let q = rl.question("Press [Enter] to Continue");
  home();
}
function startGame(){
  console.log("\n\n1. Level I: Addition & Subtraction (5 points per question)");
  console.log("2. Level II: Multiplication, Division, And Exponents (10 points per question)");
  console.log("3. Level III: Trigonometry And Calculus (20 points per question)");
  console.log("4. Main Menu");
  let level = rl.question("Welcome to the Math Callange Game!! Select Your level:");
  switch (level) {
    case "1":
      levelOne();
      break;
    case "2":
      levelTwo();
      break;
    case "3":
      levelThree();
      break;
    case "4":
      home();
      break;
    default:
      console.log(`I'm Sorry, I don't Understand \"${level}\". Please Try Again.`);
      startGame();
      break;

  }
}
function levelOne(){  //addition & subtraction game
  let lives = 0;
  while (lives < 3) {
    let x;
    let a = Math.round(Math.random()*100);
    let b = Math.round(Math.random()*100);
    x = Math.round(Math.random());
    if (x == 0){ //addition
      let response = rl.question(`Calculate: ${a} + ${b} = `);
      if (response == a+b){
        console.log("\tGood Job!");
        highScore[length-1].score += 5;
      }
      else{
        console.log("\tNot Quite, Try Another");
        lives += 1;
      }
    }
    else {//subtraction
      response = rl.question(`Calculate: ${a} - ${b} = `);
      if (response == a-b){
        console.log("\tGood Job!");
        highScore[length-1].score += 5;
      }
      else{
        console.log("\tNot Quite, Try Another");
        lives += 1;
      }
    }
  }
  console.log(`Good Game!!!Your Score is: ${highScore[length-1].score}`);
  home();
}
function levelTwo(){ //multiplication, division, and exponents
  let lives = 0;
  while (lives < 3) {
    let x;
    let a = Math.round(Math.random()*100);
    let b = Math.round(Math.random()*100);
    x = Math.round(Math.random()*2);
    if (x == 0){ //multiplication
      let response = rl.question(`Calculate: ${a} * ${b} = `);
      if (response == a*b){
        console.log("\tGood Job!");
        highScore[length-1].score += 10;
      }
      else{
        console.log("\tNot Quite, Try Another");
        lives += 1;
      }
    }
    else if(x == 1){ //division
      response = rl.question(`Calculate: ${a} / ${b} = `);
      if (response == a/b){
        console.log("\tGood Job!");
        highScore[length-1].score += 10;
      }
      else{
        console.log("\tNot Quite, Try Another");
        lives += 1;
      }
    }
    else if(x == 2){ //division
      response = rl.question(`Calculate: ${a}^${b} = `);
      if (response == a**b){
        console.log("\tGood Job!");
        highScore[length-1].score += 10;
      }
      else{
        console.log("\tNot Quite, Try Another");
        lives += 1;
      }
    }


  }
  console.log(`Good Game!!!Your Score is: ${highScore[length-1].score}`);
  home();
}
function levelThree(){
  let lives = 0;
  while (lives < 3) {
    let x;
    let a = Math.round(Math.random()*100);
    let b = Math.round(Math.random()*10);
    x = Math.round(Math.random()*2);
    if (x == 0){ //derivate
      let response = rl.question(`Calculate: [dx/dt]${a}x^${b} = `);
      if (response == `${a*b}x^${b-1}`){
        console.log("\tGood Job!");
        highScore[length-1].score += 20;
      }
      else{
        console.log("\tNot Quite, Try Another");
        lives += 1;
      }
    }
    else if(x == 1){ //sin
      response = rl.question(`Calculate: ${a}Sin(${b}) = `);
      if (response == a*Math.sin(b)){
        console.log("\tGood Job!");
        highScore[length-1].score += 20;
      }
      else{
        console.log("\tNot Quite, Try Another");
        lives += 1;
      }
    }
    else if(x == 2){ //cosine
      response = rl.question(`Calculate: ${a}Cos(${b}) = `);
      if (response == a*Math.cos(b)){
        console.log("\tGood Job!");
        highScore[length-1].score += 20;
      }
      else{
        console.log("\tNot Quite, Try Another");
        lives += 1;
      }
    }


  }
  console.log(`Good Game!!!Your Score is: ${highScore[length-1].score}`);
  home();

  //end
}


console.log("**   **   **   ******   **         *****   ******   *******   ******");
console.log("**   **   **   **       **         **      *    *   *  *  *   **");
console.log("**   **   **   ******   **         **      *    *   *  *  *   ******");
console.log("**   **   **   ******   **         **      *    *   *  *  *   ******");
console.log("************   **       ********   **      *    *   *  *  *   **");
console.log("************   ******   ********   *****   ******   *  *  *   ******");

console.log("Hello, Human! Get Ready To Be Beaten By ME :0");
console.log("To Get Started, Lets Make Your Profile!");
let name = rl.question("What's Your Name? ");
console.log(`Looking Forward to Beating you, ${name}. Lets Get Started HAHAHAHAH\t\t\t`);
makePlayer(name, 0);
home();
