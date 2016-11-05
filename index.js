var randomBytes = require('random-bytes-seed')

module.exports = function (seed) {
  var ran = randomBytes(seed)

  random.seed = ran.seed
  random.currentSeed = ran.currentSeed

  return random

  function random () {
    var next = ran(4)
    random.seed = ran.seed
    random.currentSeed = ran.currentSeed
    var val = next.readUInt32BE(0)
    if (val === 0xffffffff) val = 0
    return val / 0xffffffff
  }
}
