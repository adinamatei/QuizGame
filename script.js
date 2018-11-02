/////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


// make the code private
(function () {

    // Constructor
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    // display the random question and answers on the console
    Question.prototype.logQuestion = function () {
        console.log(this.question);

        for(let i = 0; i < this.answers.length; i++){
            console.log(i + ": " + this.answers[i]);
        }
    };

    // check the answer
    Question.prototype.checkAnswer = function(ans, callback) {
        let theScore;

        // check for answer and score
        if (ans === this.correctAnswer) {
            console.log("Correct answer!");
            theScore = callback(true);

        } else {
            console.log("Wrong answer!");
            theScore = callback(false);
        }
        //display the score
        this.displayScore(theScore);
    };

    // display the score
    Question.prototype.displayScore = function (score) {
        console.log("Your score: " + score);
        console.log("---------------------------");
    }

    // Create the questions
    const question1 = "Is JavaScript case-sensitive?";
    const answers1 = ["Yes", "No"];
    const correctAnswer1 = 0;

    const question2 = "What programming language you will learn about?";
    const answers2 = ["Java", "JavaScript", "HTML"];
    const correctAnswer2 = 1;

    const question3 = "JavaScript is the same as Java?";
    const answers3 = ["Yes", "No"];
    const correctAnswer3 = 1;

    const question4 = "What will the following code return: Boolean(10 > 9)?";
    const answers4 = ["NaN", false, true];
    const correctAnswer4 = 2;

    const q1 = new Question(question1, answers1, correctAnswer1);
    const q2 = new Question(question2, answers2, correctAnswer2);
    const q3 = new Question(question3, answers3, correctAnswer3);
    const q4 = new Question(question4, answers4, correctAnswer4);
    // console.log(q1, q2, q3, q4);

    // store the questions into array
    const arrQuestions = [q1, q2, q3, q4];
    
    // keep score 
    function calcScore() {
        const score = 0;
        return function (correct) {
            if(correct){
                score += 1;
            }
            return score;
        }
    }
    const keepScore = calcScore();
    
    // display next question
    function nextQuestion() {
        // get a random question
        let randomQuestion = Math.floor(Math.random() * arrQuestions.length);
        // console.log(randomQuestion);
        // console.log(arrQuestions[randomQuestion]);

        // display the question
        arrQuestions[randomQuestion].logQuestion();

        // ask the user for the correct answer
        const userAnswer = prompt("Please select the correct answer (type a number).");

        // type 'exit' if you want end the game
        if(userAnswer !== 'exit'){
            // check and display the answer
            arrQuestions[randomQuestion].checkAnswer(parseInt(userAnswer), keepScore);
            nextQuestion()
        } else {
            console.log('Game Over!')
        }
    }

    nextQuestion()
})();



