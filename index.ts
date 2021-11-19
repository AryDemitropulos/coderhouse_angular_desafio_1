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
        return this.answer?.toLowerCase() == answer?.toLowerCase()
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
            if(question.validateAnswer(anwers[index])){
                correctAnwers++
            }
        });
        const percentage = correctAnwers*100 / this.questions.length
        return percentage.toFixed(2)
    }

    displayExam(){
        this.questions.forEach(question=>question.showQuestion())
    }

    displayCorrectAnwers(){
        this.questions.forEach(question=>{
            console.log(question.prompt)
            console.log("ANSWER: " + question.answer)
        })
    }
}


let question1:Question = new Question("Observables help you manage . . . . . . . . data.",
                                     ["A. Synchronous","B. Asynchronous","C. Both asynchronous & synchronous","D. None of above"],
                                     "b")
let question2:Question = new Question("The . . . . . decorator allows us to define the pipe name that is globally available for use in any template in the across application.",
["A. pipeName","B. pipeDeco","C. Pipe","D. None"],
"c")

let question3:Question = new Question(" Which of the following is the correct way to apply a filter?",
["A. property-value || filter","B. Property-value && filter","C. Property-value | filter"],
"c")

let exam: Exam = new Exam([question1,question2,question3])


interface Student{
    name:string,
    lastName:string,
    anwers:string[]
}

const student1 = {
    name:"Cosme",
    lastName:"Fulanito",
    anwers:[]
}
const student2 = {
    name:"Pepito",
    lastName:"Perez",
    anwers:["b", "b"]
}
const student3 = {
    name:"Hermione",
    lastName:"Granger",
    anwers:["B", "c", "C"]
}

const class_:Student[]= [student1,student2,student3]


const giveNotesToClass = function():void{
    class_.forEach(student=>{console.log(`The student ${student.name} ${student.lastName} got a ${exam.giveNote(student.anwers)}%`)})
}

console.log("The taken exam was the following:\n\n")
exam.displayExam()

console.log("The correct anwsers were:\n\n")
exam.displayCorrectAnwers()

console.log("The califications for the class were:\n\n")
giveNotesToClass()

