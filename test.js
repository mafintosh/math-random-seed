var tape = require('tape')
var seed = require('./')

tape('returns a number', function (t) {
  var random = seed()

  var b = random()
  t.same(typeof b, 'number')
  t.end()
})

tape('is seedable', function (t) {
  var random = seed()

  var b1 = random()
  t.same(typeof b1, 'number')

  var b2 = random()
  t.same(typeof b2, 'number')

  random = seed(random.seed)
  t.same(b1, random())
  t.same(b2, random())

  t.end()
})
