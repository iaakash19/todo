app.factory('TODO', TODO);

function TODO($http, $q) {

	var data = {
		fetchAll: fetchAll,
		create: create,
		delete: remove
	};

	function create(todo) {
		var deferred = $q.defer();
		$http.post('/api/todos', todo)
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function(data){
			deferred.reject(data);
		});
		return deferred.promise;
	}

	function remove(id) {
		var deferred = $q.defer();
		$http.delete('/api/todos/' + id)
		.success(function(data){
			deferred.resolve(data);

		})
		.error(function(data){
			deferred.reject(data);

		})
		return deferred.promise;
	}

	function fetchAll() {
		var deferred = $q.defer();
		$http.get('/api/todos')
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function(data){
			console.log('Error', data);
			deferred.reject(data);
		});
		return deferred.promise;
	}



	return data;
}