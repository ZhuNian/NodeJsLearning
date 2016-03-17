var Q = require('q');
//if you return a value(no matter what, even if it's false) in handler, outputPromise will get fulfilled
//if you throw an exception in the handler, outputPromise will get rejected
//if you return a promise in the handler, outputPromise will become the promise
var outputPromise = Q(5).then(function(val) {
  console.log('first', val);
  //throw {
  //  msg: 'yes'
  //}
  return Q(val).then(function(val) {
    return val+'first promise';
  });
}, function(err) {
  console.log('first err', err);
}).then(function(val) {
  console.log('second', val);
}, function(err) {
  console.log('second err', err);
});