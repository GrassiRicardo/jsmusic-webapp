/*app.service('MusicaService', function ($http) {
	

	this.getList = function(callback) {
		$http({
			method:"GET",
			url:"http://localhost:3000/musicas"
		}).success(function (ret) {
			callback(ret);
		}).error(function (ret) {
			callback(ret);
		});
	}

	this.get = function(id, callback) {
		$http({
			method:"GET",
			url:"http://localhost:3000/musicas/get?Id="+id
		}).success(function (ret) {
			callback(ret[0]);
		}).error(function (ret) {
			callback(ret);
		});
	}

	this.inserir = function(objMusica, callback) {
		$http({
			method:"POST",
			url:"http://localhost:3000/musicas/save",
			data: objMusica
		}).success(function (ret) {
			callback(ret);
		}).error(function (ret) {
			callback(ret);
		});
	}

	this.delete = function(obj, callback) {
		$http({
			method:"POST",
			url:"http://localhost:3000/musicas/delete",
			data: obj
		}).success(function (ret) {
			callback(ret);
		}).error(function (ret) {
			callback(ret);
		});
	}
});*/