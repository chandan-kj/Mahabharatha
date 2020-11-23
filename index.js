var readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log(chalk.greenBright("---------Simple quiz on the epic of Mahabharata -----------" + "\n"))

console.log(chalk.redBright("Go through the instruction before playing the game" + "\n" + "\n" +
  "1)This quiz consists of 2 Rounds " + "\n" +
  "2)You need 15 points to reach Round 2" + "\n" +
  "3)Correct answer  5 Points and for Wrong answer -1 Points." + "\n"));

var userName = readlineSync.question(chalk.blueBright("Enter your name? "));
console.log(chalk.yellow( "\n" + "HEY!!! " + userName +" Its nice to have you here... " + "\n"))
console.log(chalk.bgRedBright("---------------Lets Start ROUND 1------------"))

var topscores = [
  {name:"Arjuna", score:40}, 
  {name:"Karna", score:39}, 
  {name:"Krishna", score:35}
  ];


var score = 0;

var questionRound1 = [{
  question:"\n"+ "1] How long was the Mahabharata War? ",
  options:"\n1]18 \n2]16 \n3]20 \n4]12 \nYour answer: ",
  answer:"1"
},
  {
  question: "2]How many children did Madri have? ",  
  answer:"1",
  options:"\n1]2 \n2]4 \n3]1 \n4]4 \nYour answer: "
  
},
{
  question:"3] Who was the Spiritual father of Arjuna? ",
  answer:"4",
  options:  " \n1]Vayu \n2]Yama \n3]Sruya \n4]Indra \nYour answer: "
  
},
{
  question:"4] What is the other name of Karna? ",
  options:"\n1]Radheya \n2]Partha \n3]Jishnu \n4]Kiriti \nYour answer: ",
  answer:"1"
},
{
  question:"5] How many children did Dhritarashtra and Gandhari have? ",
  options:"\n1]100 \n2]101 \n3]102 \n4]103 \nYour answer: ",
  answer:"2"
}
]


var questionRound2 = [{
  question:"\n"+ "1] Which weapon did Lord Krishna use to kill Shishupala? ",
  options:"\n1]Naryana Astra \n2]Pashupatstra \n3]Sudarshana Chakra \n4]Nandak Sword \nYour answer: ",
  answer:"3"
},
  {
  question: "2] Which Kaurava fought for the Pandavas in the war? ",  
  answer:"1",
  options:"\n1]Yuyutsu \n2]Vikarna \n3]Barbarik \n4]Dussala \nYour answer: "
  
},
{
  question:"2] Which of the following characters is NOT married to Draupadhi? ",
  answer:"2",
  options:  " \n1]Arjuna \n2]Karna \n3]Sahadeva \n4]Nakula \nYour answer: "
  
},
{
  question:"4] Krishna was the charioteer of arjuna.This gave him a special name. What was it? ",
  options:"\n1]Kannan \n2]Mukunda \n3]Parthasarathy \n4]Madhava \nYour answer: ",
  answer:"3"
}
]

function play(question, answer, options) {
  var userAnswer = readlineSync.question(chalk.cyanBright(question, options));
  console.log(chalk.green("You Entered option " + userAnswer + "\n"));
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.greenBright("You are right! "));
    score = score + 5;
  } else {
    console.log(chalk.redBright("You are wrong! "));
    console.log("Correct answer is: ", answer );
    score = score - 1;
  }
  console.log(chalk.whiteBright("Your score is : ", score));
  console.log("-------------");
}



for(var i = 0; i< questionRound1.length; i++){
  var currentQuestion = questionRound1[i];
  play(currentQuestion.question, currentQuestion.answer, currentQuestion.options)
}


if(score >=13 ){
  console.log(chalk.bgGreenBright("Congrats!!!You are selected for Round-2"))
  console.log(chalk.green("-----------------Round 2---------------"))
  for(var i = 0; i < questionRound2.length; i++){
  var currentQuestion = questionRound2[i];
  play(currentQuestion.question, currentQuestion.answer, currentQuestion.options)
}
}else{
  console.log(chalk.red("SORRY!!! You didnt qualify for Round-2"));
  console.log(chalk.red("Thank you for participating!!"))
}
console.log("Your final score: " ,score)
var flag = 0;
for(var i=0;i<topscores.length;i++){
  if(score >= topscores[i].score){
    console.log(chalk.green('\n'+'Congratulations! '+userName+' You have beaten the topscore,send me the screenshot , we will update the scoreboard'))
    flag = 1;
    console.log(chalk.red("Thank you for participating"))
    break;
  }
}
if(flag===0){
  console.log(chalk.red("Try Again for getting high score"));
}

for(var i = 0; i<topscores.length; i++){
  console.log( "These are the Topscores: ")
   console.log(`${topscores[i].name} ::: ${topscores[i].score}` )
}