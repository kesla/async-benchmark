# async-benchmark

Thin wrapper around benchmark.js to run asyncronous benchmarks (because I always forget the API)

[![NPM](https://nodei.co/npm/async-benchmark.png?downloads&stars)](https://nodei.co/npm/async-benchmark/)

[![NPM](https://nodei.co/npm-dl/async-benchmark.png)](https://nodei.co/npm/async-benchmark/)

## Installation

```
npm install async-benchmark
```

## Example

### Input

```javascript
var benchmark = require('./async-benchmark')

  , benchSetTimeout = function (done) {
      setTimeout(done)
    }
  , benchSetImmediate = function (done) {
      setImmediate(done)
    }

benchmark('setTimeout', benchSetTimeout, function (err, event) {
  console.log(event.target.toString())
  benchmark('setImmediate', benchSetImmediate, function (err, event) {
    console.log(event.target.toString())
  })
})
```

### Output

```
setTimeout x 361 ops/sec ±0.87% (71 runs sampled)
setImmediate x 722 ops/sec ±0.48% (58 runs sampled)
```

## Licence

Copyright (c) 2014 David Björklund

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
