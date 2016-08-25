// var outputPromise = Promise.resolve(4)
// .then(function (input) {
// 	debugger
// 	return input;
// }, function (reason) {
// });

var outputPromise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve(4);
	}, 1);
})
.then(function (input) {
	debugger
	return input;
}, function (reason) {
});