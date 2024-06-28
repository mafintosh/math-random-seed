const tape = require('tape')
const seed = require('./')

tape('returns a number', function (t) {
  const random = seed()

  const b = random()
  t.same(typeof b, 'number')
  t.end()
})

tape('is seedable', function (t) {
  let random = seed()

  const b1 = random()
  t.same(typeof b1, 'number')

  const b2 = random()
  t.same(typeof b2, 'number')

  random = seed(random.seed)
  t.same(b1, random())
  t.same(b2, random())

  t.end()
})
