# math-random-seed

Similar to [random-bytes-seed](https://github.com/mafintosh/random-bytes-seed) but returns a number between 0 and 1, similar to Math.random().
Useful for reproducible tests.

```
npm install math-random-seed
```

## Usage

``` js
var seed = require('math-random-seed')
var random = seed('a seed')

console.log(random())
console.log(random())
```

Running the above will print

```
0.5596440456713653
0.013160173085788306
```

## API

#### `var random = seed([seed])`

Create a new random generator. If you do not provide a seed a random one is chosen for you.

#### `var num = random()`

Return a random number between 0 and 1.

#### `random.seed`

The seed originally used.

#### `random.currentSeed`

The seed for the next random operation.


## License

MIT
