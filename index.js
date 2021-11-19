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
var question = new Question("Observables help you manage . . . . . . . . data.", ["A. Synchronous", "B. Asynchronous", "C. Both asynchronous & synchronous", "D. None of above"], "b");
var userAnswer = "c";
question.showQuestion();
console.log("Tu respuesta: ".concat(userAnswer, "..."));
if (question.validateAnswer(userAnswer)) {
    console.log("Respuesta Correcta!");
}
else {
    console.log("Respuesta Incorrecta! :'(");
}
