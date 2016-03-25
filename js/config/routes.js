app.config(function($routeProvider) {
	$routeProvider
	.when('/',  {
		templateUrl: 'template/home.html',
		controller: 'homeController'
	})
});