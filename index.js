var Question = /** @class */ (function () {
    function Question(prompt, options, answer) {
        this.prompt = prompt;
        this.options = options;
        this.answer = answer;
    }
    Question.prototype.showQuestion = function () {
        console.log(this.prompt);
        this.options.forEach(function (question) { return console.log("    ".concat(question, "\n")); });
        console.log("\n");
    };
    Question.prototype.validateAnswer = function (answer) {
        return this.answer == answer;
    };
    return Question;
}());
var Exam = /** @class */ (function () {
    function Exam(questions) {
        this.questions = questions;
    }
    Exam.prototype.giveNote = function (anwers) {
        var correctAnwers = 0;
        this.questions.forEach(function (question, index) {
            if (question.answer == anwers[index]) {
                correctAnwers++;
            }
        });
        var percentage = correctAnwers * 100 / this.questions.length;
        return percentage.toFixed(2);
    };
    return Exam;
}());
var question1 = new Question("Observables help you manage . . . . . . . . data.", ["A. Synchronous", "B. Asynchronous", "C. Both asynchronous & synchronous", "D. None of above"], "b");
var question2 = new Question("Observables help you manage . . . . . . . . data.", ["A. Synchronous", "B. Asynchronous", "C. Both asynchronous & synchronous", "D. None of above"], "b");
var question3 = new Question("Observables help you manage . . . . . . . . data.", ["A. Synchronous", "B. Asynchronous", "C. Both asynchronous & synchronous", "D. None of above"], "b");
var exam = new Exam([question1, question2, question3]);
var userAnswers = ["a", "b", "c"];
var userAnswers2 = ["a", "b", "b"];
console.log(exam.giveNote(userAnswers));
console.log(exam.giveNote(userAnswers2));
