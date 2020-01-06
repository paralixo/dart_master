const inquirer = require("./utils/inquirer")
const TourDuMonde = require("./models/TourDuMonde")
const Player = require("./models/Player")

async function getPlayerNames(playersNumber) {
    playersNumber = parseInt(playersNumber)
    const offset = 1
    let players = []
    let questions = []

    for(let i = 1; i < playersNumber + offset; i++) {
        questions.push(`Nom du joueur ${i}`)
    }

    const names = await inquirer.askMultiple(questions)
    for(let i = 0; i < playersNumber; i++) {
        const name = names[`answer${i}`]
        players.push(new Player(name))
    }

    return players
}

async function initializeGame() {
    const gameMode = await inquirer.ask("Mode de jeu")
    const playersNumber = await inquirer.ask("Nombre de joueurs")
    const players = await getPlayerNames(playersNumber)

    // TODO: utiliser le mode de jeu choisi
    return new TourDuMonde(players)
}

async function gameLoop() {
    let game = await initializeGame()
    game.greeting()
    for (let i = 0; i < 5; i ++) {
        await game.playTurn()
    }
}

gameLoop()


