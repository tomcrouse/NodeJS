class Convector {

    constructor(curRubles) {
        this.curRubles = curRubles;
    }

    roundTwo(amount) {
        return Math.round(amount * 100) / 100
    }

    dollarsToRubles(dol) {
        return this.roundTwo(this.curRubles * dol)
    }

    rublesToDollars(rub) {
        return this.roundTwo(rub / this.curRubles)
    }
}

module.exports = Convector