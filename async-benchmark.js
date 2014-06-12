var Benchmark = require('benchmark')
  , run = function (name, bench, callback) {
      var opts = {
              defer: true
            , fn: function (deffered) {
                bench(deffered.resolve.bind(deffered))
              }
          }

      new Benchmark(name, opts)
        .on('complete', function (event) {
          callback(null, event)
        })
        .run({ async: true })
    }

module.exports = run