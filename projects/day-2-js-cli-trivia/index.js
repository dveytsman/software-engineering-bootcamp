const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

const questions = [
    {
    question: "1. What keyword declares a variable you can reassign? (a) const (b) let (c) var",
    answer: "b"
  },
  {
    question: "2. Which of these is a JavaScript data type? (a) integer (b) float (c) boolean",
    answer: "c"
  },
  {
    question: "3. Which operator is used for strict equality? (a) == (b) === (c) =",
    answer: "b"
  }
]

let score = 0;
let current = 0;

function askQuestion(){
  if (current < questions.length){
        rl.question(questions[current].question + '\n', (userInput) => {
      if (userInput.trim().toLowerCase() === questions[current].answer) {
        score++;
      }
      current++;
      askQuestion();
    });
  } else {
    console.log(`\nYou got ${score} out of ${questions.length} correct.`);
    rl.close();
  }
}

askQuestion();