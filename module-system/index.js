const Convector = require('./currency')

const convector = new Convector(73.81)

const dollars = convector.dollarsToRubles(5)
console.log(dollars)