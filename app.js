
(function() {
	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', [ '$http', function($http) {
		var store = this;

		store.products = [ ];

		$http.get('/products.json').success(function(data) {
			store.products = data;
		});
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

/*	var gems = [
	{
		name: 'Amethyst',
		price: 100,
		description: 'Some gems have hidden qualities beyond their luster, ' +
		'beyond their shine... Amethyst is one of those gems.',
		images: [
			'images/gem-02.png',
			'images/gem-01.png',
			'images/gem-04.png',
		],
		reviews: [{
	        stars: 3,
	        body: "I think this gem was just OK, could honestly use more shine, IMO.",
	        author: "JimmyDean@example.org",
	        createdOn: 1398491980837
	    }, {
	        stars: 4,
	        body: "Any gem with 12 faces is for me!",
	        author: "gemsRock@example.org",
	        createdOn: 1398491980837
	    }],
	    shine: 8,
      	rarity: 7,
      	faces: 14,
		canPurchase: true,
	},

	{
		name: 'Zircon',
		price: 65,
		description: 'This one has a square shape, like a Square.',
		images: [
			"images/gem-05.png",
			"images/gem-03.png",
			"images/gem-09.png",
		],
		reviews: [{
	        stars: 3,
	        body: "I think this gem was just OK, could honestly use more shine, IMO.",
	        author: "JimmyDean@example.org",
	        createdOn: 1397491980837
	    }, {
	        stars: 4,
	        body: "Any gem with 12 faces is for me!",
	        author: "gemsRock@example.org",
	        createdOn: 1397491980837
	    }],
	    shine: 8,
      	rarity: 7,
      	faces: 14,
		canPurchase: true,
	},

	{
		name: 'Emerald',
		price: 170,
		description: 'Some gems have hidden qualities beyond their luster, ' +
		'beyond their shine... Emerald is one of those gems.',
		images: [
			"images/gem-07.png",
			"images/gem-06.png",
			"images/gem-08.png",
		],
		reviews: [{
	        stars: 3,
	        body: "I think this gem was just OK, could honestly use more shine, IMO.",
	        author: "JimmyDean@example.org",
	        createdOn: 1397491980837
	    }, {
	        stars: 4,
	        body: "Any gem with 12 faces is for me!",
	        author: "gemsRock@example.org",
	        createdOn: 1397491980837
	    }],
	    shine: 8,
      	rarity: 7,
      	faces: 14,
		canPurchase: true,
	}
	];
*/

})();