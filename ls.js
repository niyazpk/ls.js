// localStorage wrapper
ls = (function() {

	var remove = function(arr) {
			arr = [].concat(arr); /* Make sure this is an array */
			for (var i = 0; i < arr.length; i++) {
				localStorage.removeItem(arr[i]);
			}
		};

	var set = function(key, value) {
			localStorage.setItem(key, JSON.stringify({
				value: value
			}));
		};

	var get = function(key) {
			var str = localStorage.getItem(key);
			if (str) {
				return JSON.parse(str).value;
			} else {
				return null;
			}
		};

	var keys = function(str) {
			var re = new RegExp(str);
			var list = [];
			for (var i = 0; i < localStorage.length; i++) {
				var key = localStorage.key(i);
				if (!str || re.test(key)) {
					list.push(key);
				}
			}
			return list;
		};

	return {
		flush: localStorage.clear,
		remove: remove,
		set: set,
		get: get,
		keys: keys
	}

}());