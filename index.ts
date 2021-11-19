class Question{
    prompt:string
    options: string[]
    answer:string

    constructor(prompt:string, options:string[], answer:string){
        this.prompt = prompt
        this.options =options
        this.answer = answer
    }

    showQuestion(){
        console.log(this.prompt)
        this.options.forEach(question =>console.log(`    ${question}\n`));
        console.log(`\n`)
    }

    validateAnswer(answer:string):boolean{
        return this.answer == answer
    }

}

let question:Question = new Question("Observables help you manage . . . . . . . . data.",
                                     ["A. Synchronous","B. Asynchronous","C. Both asynchronous & synchronous","D. None of above"],
                                     "b")

const userAnswer = "c"

question.showQuestion()
console.log(`Tu respuesta: ${userAnswer}...`)

if(question.validateAnswer(userAnswer)){
    console.log("Respuesta Correcta!")
}else{
    console.log("Respuesta Incorrecta! :'(")
}


