const parse = require('..')
const x = parse.getDefaultPeers("Gamecredits").filter(v => v.ssl)
console.log(x)
