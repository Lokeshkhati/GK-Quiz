const readlineSync = require("readline-sync");
const chalk = require("chalk");

var userName = readlineSync.question("Hi there, What is your name? \n");
console.log(chalk.bgCyan(`Welcome ${userName.toUpperCase()},  Let's have a GK Quiz`));

var score=0;

var questionList = [{
  question: "Q1 Who is the current Prime Minister of India? \n a) Rahul Gandhi \n b) Sambit patra \n c) Narendra Modi \n d) Manmohan Sing\n",
  answer: "c",
  correctAns: "Narendra Modi is current Prime Minister of India."
},
{
  question: "Q2 Who wrote National Anthem of Inda? \n a) Rabindranath Tagore \n b) Bagat Singh \n c) Badridatt pandey \n d) Akhilesh yadav\n",
  answer: "a",
  correctAns: "Rabindranath Tagore wrote National Anthem of India"
},
{
  question: "Q3 Who created javaScript? \n a) Brendan Eich \n b) Tanay pratap \n c) Akshay Saini \n d) Brad Traversary\n",
  answer: "a",
  correctAns: "Brendan Eich created javaScript "
},
{
  question: "Q4 What is the capital of Uttarakhand? \n a) Mumbai \n b) New Delhi \n c) Lucknow \n d) Dehradun\n",
  answer: "d",
  correctAns: "Dehradun is the capital of Uttarakhand"
},
{
  question: "Q5 who is the author of Panchtantra? \n a) Raghav Pandey \n b) Vishnu Sharma \n c) Jhon Smith \n d) Tim Mathew\n",
  answer: "b",
  correctAns: "Vishnu Sharma is the author of Panchttantra."
},
{
  question: "Q6  Who wrote original Ramayana \n a) Ved Vyasa\n b) Valmiki \n c) Tulsi Das \n d) Kabir Das\n",
  answer: "b",
  correctAns: "Maharshi Valmiki Wrote the Original Ramayana."
},
{
  question: "Q7 When is Christmas  Day? \n a) June 4th \n b) August 1st \n c) October 11th \n d) Decemeber 25th\n",
  answer: "d",
  correctAns: "Christmas day is celebrated every year on 25th Dec."
},
{
  question: "Q8 when is republic day celebrated  in Inida? \n a) September 30th \n b) January 26th \n c) April 22nd\n d) March 5th\n",
  answer: "b",
  correctAns: "Republic day celebrated  in Inida on January 26th"
},
{
  question: "Q9 What is the capital of India? \n a) Mumbai \n b) Kolkata \n c) Goa \n d) New Delhi\n",
  answer: "d",
  correctAns: "New Delhi is the capital of India."
},
{
  question: "Q10 Which city is known as Pink city in India ? \n a) Banglore \n b) Jaipur \n c) Kashmir \n d) Noida\n",
  answer: "b",
  correctAns: "Jairpur city is known as the Pinkn city of India"
}
];

function play( ques, ans, correctAns) {
  var userAns = readlineSync.question(ques);

  if(userAns.toUpperCase() === ans.toUpperCase()){
    console.log(chalk.green("Yes, That's correct. "));
    score++;
  }
  else {
    console.log(chalk.red("No, That's wrong."));
    console.log(chalk.green(correctAns));
    score--;
  }

  console.log("----------------------------");
  console.log(chalk.bgYellow("Your current Score is: "+ score));
  console.log("----------------------------\n");
}

for(var i=0; i<questionList.length; i++) {
  var currentQues = questionList[i];
  play(currentQues.question , currentQues.answer , currentQues.correctAns);
}


console.log(chalk.yellow(userName.toUpperCase()) + " ,Your final score is : " + chalk.green(score) + " \n\n");

var topScorers = [
	{	name : "Ravi",
		score: 9
	},
	{	name : "Deepak",
		score: 8
	},
	{	name : "Krishna",
		score: 8
	}
];

function hasUserBeatHighScore(){
		for (var i=0; i<topScorers.length; i++){
      var currentScorer = topScorers[i];
			if(score > currentScorer.score){
				console.log(chalk.cyan("Congratulations! you have beat one of the top score Please send me a screenshot and I wil update your name in the top scorers.\n"));
				break;
			}
		}
}
hasUserBeatHighScore();

function printTopScores(topScorers){
		for (var i=0; i<topScorers.length; i++){
      var currentScorer = topScorers[i];
		console.log(currentScorer.name + " : " + currentScorer.score);
	}
}

console.log(chalk.black.bgCyan.bold("\nThe top scorers are :"));
printTopScores(topScorers);
