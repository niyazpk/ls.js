// localStorage wrapper

ls = {

	flush: localStorage.clear,
	key: localStorage.key,

	remove: function(arr){
		/* Make sure this is an array */
		arr = [].concat(arr); 
		for(var i = 0; i < arr.length; i++){
			localStorage.removeItem(arr[i]);
		}
	},

	set: function(key, value){
		localStorage.setItem(key, JSON.stringify({
			value: value
		}));
	},

	get: function(key){
		var str = localStorage.getItem(key);
		
		if(str){
			return JSON.parse(str).value;
		} else {
			return null;
		}
	},

	keys: function(str){

		var re = new RegExp(str);

		var list = [];
		for(var i = 0; i < localStorage.length; i++){
			var key = localStorage.key(i);
			if(!str || re.test(key)){
				list.push(key);
			}
		}
		return list;
	}
};
