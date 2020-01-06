class Player {
    name
    score = 0
    lastHitValue = 0

    constructor(name) {
        this.name = name
    }

    addScore(hitValue) {
        this.lastHitValue = parseInt(hitValue)
        this.score += this.lastHitValue
    }

    cancelLastHit() {
        this.score -= this.lastHitValue
    }
}

module.exports = Player
