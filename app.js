
(function() {
	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', [ '$http', function($http) {
		this.products = gems;

		//var store = this;

		//store.products = [ ];

		//$http.get('/products.json').success(function(data) {
		//	store.products = data;
		//});
	}]);

	app.controller('ReviewController', function($scope) {
		this.review = {};

		$scope.today = Date.now();
		this.review.createdOn = $scope.today;

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

})();