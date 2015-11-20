var fs = require('fs');
var Q = require('q');

function promise_readFile(arg) {
  var deferred = Q.defer();
  fs.readFile(arg, 'UTF-8', function(err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
  return deferred.promise;
}
var promise2 = promise_readFile('test.txt').then(promise_succeed.bind(null, 'hello', 'succeed'), promise_failed).then(promise_succeed.bind(null, 'hello2', 'succeed2'), promise_failed.bind(null, 'hello', 'failed'));

function promise_succeed(data, data2) {
  console.log('YEP!!!!!!!!');
  console.log(data);
  console.log(data2);
  return promise_readFile('test2.txt');
}

function promise_failed(data, data2) {
  console.log('FAILED!!!!!!!!');
  console.log(data);
  console.log(data2);
  return promise_readFile('test2.txt');
}

