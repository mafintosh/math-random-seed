const randomBytes = require('random-bytes-seed')

const SPACE = 0xffffffff + 1

module.exports = function (seed) {
  const ran = randomBytes(seed)

  random.seed = ran.seed
  random.currentSeed = ran.currentSeed

  return random

  function random () {
    const next = ran(4)
    random.seed = ran.seed
    random.currentSeed = ran.currentSeed
    const val = next.readUInt32BE(0)
    return val / SPACE
  }
}
