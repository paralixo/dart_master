const inquirer = require("inquirer")

const ask = async (question) => {
    let result = ""
    await inquirer
        .prompt([{type: "input", name: "value", message:question}])
        .then(a => result = a.value)
        .catch(error => console.log(error))
    return result
}

const askMultiple = async (questions) => {
    let result = {}
    questions = questions.map((question, index) => {
        return {
            type: "input",
            name: `answer${index}`,
            message: question
        }
    })
    await inquirer
        .prompt(questions)
        .then(a => result = a)
        .catch(error => console.log(error))
    return result
}

module.exports = {
    ask,
    askMultiple
}
