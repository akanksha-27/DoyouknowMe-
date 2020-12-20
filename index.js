var readlineSync = require('readline-sync');
const chalk = require('chalk');


var score = 0;

var userName = readlineSync.question(chalk.bgCyan("Please enter your name--- "));

console.log(chalk.green("Welcome " + userName + "! Let's see how well you know Akanksha") );
console.log("            ");

var start = readlineSync.question("press any key, To start quiz-- ");

console.log("            ");

function quiz(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer){
    console.log(chalk.green("You got it right! :D"));
    console.log("            ");
    score++;
  }else {
    console.log(chalk.red("You got it wrong :("));
    console.log("            ");
  }
};



var questions = [{
  question: "What is my favourite dessert? ",
  answer: "Ras-malai"
},{
  question: "Which is my favourite place i want to visit once? ",
  answer: "Paris"
},{
  question: "Which Film Series i used to Watch Everytime? ",
  answer: "Harry Potter"
},{
  question: "What is my favorite color? ",
  answer: "black"
},{
  question: "Which place i want to explore with friends? ",
  answer: "Leh-ladakh"

}];


for (var i=0; i<questions.length; i++){
  var currentQuestionNumber = questions[i];
  quiz(chalk.cyanBright(currentQuestionNumber.question), currentQuestionNumber.answer)
};


if(score>2){
  console.log(chalk.bggreenbright("😃! Your score is: "+score)); 
}else{
  console.log(chalk.bgRed("😞, your score is: "+score)); 

};