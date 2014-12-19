function () {
	var Q = require('q');
	var dfd = Q.defer();
	if (SERVER_SIDE) {
		var component = require(/*fileName*/); //fileName will be specified by the reader of this file
		dfd.resolve(component);
	} else {
		require.ensure([], function (require) {
			var component = require(/*fileName*/); //fileName will be specified by the reader of this file
			dfd.resolve(component);
		});
	}
	return dfd.promise;
}