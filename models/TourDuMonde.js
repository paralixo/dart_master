const Game = require("./Game")

class TourDuMonde extends Game {
    constructor(players) {
        super(3, players)
    }

    greeting() {
        const offset = 1
        let greeting = `\nLa partie de Tour du monde va commencer.\nQue les ${this.numberOfPlayers} joueurs : `
        this.players.forEach((player, index) => {
            if (index === this.players.length - offset) {
                greeting += ` et ${player.name}`
            } else {
                greeting += ` ${player.name},`
            }
        })
        greeting += " se préparent à tirer.\n"
        console.log(greeting)
    }

    applyGameRules() {
        // TODO: logique mode de jeu
        this.showScore()
    }

    showScore() {
        let table = {}
        this.players.forEach(player => {
            table[player.name] = player.score
        })
        console.table(table)
    }
}

module.exports = TourDuMonde
