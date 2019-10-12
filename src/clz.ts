class Creature {
    numOfHands: number
    numOfFeet: number
    constructor(numOfHands: number, numOfFeet: number) {
        this.numOfHands = numOfHands
        this.numOfFeet = numOfFeet
    }
}

const creature = new Creature(0, 4)
console.log(creature)
