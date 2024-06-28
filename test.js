const test = require('brittle')
const seed = require('./')

test('returns a number', function (t) {
  const random = seed()

  const b = random()
  t.is(typeof b, 'number')
})

test('is seedable', function (t) {
  let random = seed()

  const b1 = random()
  t.is(typeof b1, 'number')

  const b2 = random()
  t.is(typeof b2, 'number')

  random = seed(random.seed)
  t.is(b1, random())
  t.is(b2, random())
})
