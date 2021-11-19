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
        var _a;
        return ((_a = this.answer) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == (answer === null || answer === void 0 ? void 0 : answer.toLowerCase());
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
            if (question.validateAnswer(anwers[index])) {
                correctAnwers++;
            }
        });
        var percentage = correctAnwers * 100 / this.questions.length;
        return percentage.toFixed(2);
    };
    Exam.prototype.displayExam = function () {
        this.questions.forEach(function (question) { return question.showQuestion(); });
    };
    Exam.prototype.displayCorrectAnwers = function () {
        this.questions.forEach(function (question) {
            console.log(question.prompt);
            console.log("ANSWER: " + question.answer);
        });
    };
    return Exam;
}());
var question1 = new Question("Observables help you manage . . . . . . . . data.", ["A. Synchronous", "B. Asynchronous", "C. Both asynchronous & synchronous", "D. None of above"], "b");
var question2 = new Question("The . . . . . decorator allows us to define the pipe name that is globally available for use in any template in the across application.", ["A. pipeName", "B. pipeDeco", "C. Pipe", "D. None"], "c");
var question3 = new Question(" Which of the following is the correct way to apply a filter?", ["A. property-value || filter", "B. Property-value && filter", "C. Property-value | filter"], "c");
var exam = new Exam([question1, question2, question3]);
var student1 = {
    name: "Cosme",
    lastName: "Fulanito",
    anwers: []
};
var student2 = {
    name: "Pepito",
    lastName: "Perez",
    anwers: ["b", "b"]
};
var student3 = {
    name: "Hermione",
    lastName: "Granger",
    anwers: ["B", "c", "C"]
};
var class_ = [student1, student2, student3];
var giveNotesToClass = function () {
    class_.forEach(function (student) { console.log("The student ".concat(student.name, " ").concat(student.lastName, " got a ").concat(exam.giveNote(student.anwers), "%")); });
};
console.log("The taken exam was the following:\n\n");
exam.displayExam();
console.log("The correct anwsers were:\n\n");
exam.displayCorrectAnwers();
console.log("The califications for the class were:\n\n");
giveNotesToClass();
