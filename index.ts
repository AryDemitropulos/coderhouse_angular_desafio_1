
const question:Question = {
    prompt: `Observables help you manage . . . . . . . . data.\nA. Synchronous\nB. Asynchronous\nC. Both asynchronous & synchronous\nD. None of above\n\n`,
    answer:"b"
}
const userAnswer = "c"

console.log(question)
console.log(`Tu respuesta: ${userAnswer}...`)

if(question.answer== userAnswer){
    console.log("Respuesta Correcta!")
}else{
    console.log("Respuesta Incorrecta! :'(")
}

interface Question{
    prompt:string,
    answer:string
}


