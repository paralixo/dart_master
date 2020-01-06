const inquirer = require("../utils/inquirer")

class Game {
    dartsOnTurn
    numberOfPlayers
    players
    turn = 0

    constructor(dartsOnTurn, players) {
        if (this.constructor === Game) {
            throw new TypeError("Abstract class 'Game' cannot be instantiated directly")
        }
        this.dartsOnTurn = dartsOnTurn
        this.players = players
        this.numberOfPlayers = players.length
        this.shufflePlayers()
    }

    shufflePlayers() {
        this.players.sort(() => Math.random() - 0.5)
    }

    nextTurn() {
        // TODO: gérer le cas où un joueur a terminé la partie
        this.turn += 1
        if (this.turn >= this.players.length) {
            this.turn = 0
        }
    }

    async playTurn() {
        let player = this.players[this.turn]
        const score = await inquirer.ask(`Score du lancé de ${player.name}`)
        player.addScore(score)
        this.applyGameRules()
        // TODO: gérer le fait qu'un joueur lance plusieurs fléchettes à la suite
        this.nextTurn()
    }

    applyGameRules() {
        // default rules ? should override
    }
}

module.exports = Game
