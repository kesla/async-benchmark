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