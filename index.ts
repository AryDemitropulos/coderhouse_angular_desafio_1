class Question{
    prompt:string
    options: string[]
    answer:string

    constructor(prompt:string, options:string[], answer:string){
        this.prompt = prompt
        this.options =options
        this.answer = answer
    }

    showQuestion():void{
        console.log(this.prompt)
        this.options.forEach(question =>console.log(`    ${question}\n`));
        console.log(`\n`)
    }

    validateAnswer(answer:string):boolean{
        return this.answer == answer
    }

}

class Exam{
    questions:Question[]

    constructor(questions:Question[]) {
        this.questions = questions
    }
    

    giveNote(anwers:string[]){
        let correctAnwers = 0
        this.questions.forEach((question,index) => {
            if(question.answer == anwers[index]){
                correctAnwers++
            }
        });
        const percentage = correctAnwers*100 / this.questions.length
        return percentage.toFixed(2)
    }
}


let question1:Question = new Question("Observables help you manage . . . . . . . . data.",
                                     ["A. Synchronous","B. Asynchronous","C. Both asynchronous & synchronous","D. None of above"],
                                     "b")
let question2:Question = new Question("Observables help you manage . . . . . . . . data.",
["A. Synchronous","B. Asynchronous","C. Both asynchronous & synchronous","D. None of above"],
"b")

let question3:Question = new Question("Observables help you manage . . . . . . . . data.",
["A. Synchronous","B. Asynchronous","C. Both asynchronous & synchronous","D. None of above"],
"b")

let exam: Exam = new Exam([question1,question2,question3])

const userAnswers = ["a","b","c"]
const userAnswers2 = ["a","b","b"]


console.log(exam.giveNote(userAnswers))
console.log(exam.giveNote(userAnswers2))

