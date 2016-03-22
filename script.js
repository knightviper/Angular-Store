// Code goes here

// Code goes here

(function(){
	var app = angular.module("gemStore",[]);
	
	app.controller("StoreController", function(){
		this.products = gems;
		
	});
	
	app.directive('productDescription', function(){
	  return {
	    restrict: 'E',
	    templateUrl: 'product-description.html'
	  };
	});
	 
	app.directive('productSpecification', function(){
	  return {
	    templateUrl: 'product-specification.html'
	  };
	}); 
	
	app.directive('productReviews', function(){
	  return {
	    restrict: 'E',
	    templateUrl: 'product-reviews.html'
	  };
	});
	
	app.directive('productTabs',function(){
	  return {
	    restrict: 'E',
	    templateUrl: 'product-tabs.html',
	    controller: function(){
	        this.tab = 1;
	        this.setTab = function(newTab){
	          this.tab = newTab;
	        };
	        this.isSet = function(check1){
	        return this.tab === check1;
	        };
	      },
	      controllerAs: 'panel'
	  };
	});
	
	app.directive('productGallery', function(){
	  return {
	    restrict: 'E',
	    templateUrl: 'product-gallery.html',
	    controller: function(){
          this.current = 0;
          this.setCurrent = function(index){
          this.current = index || 0;
        };
      },
      controllerAs: 'gallery'
	  };
	});
	



app.controller("ReviewController", function(){
  this.review = {};
  this.addReview = function(product){
    product.reviews.push(this.review);
    this.review = {};
  }
});




















	var gems = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
        "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-02.gif",
        "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-05.gif",
        "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-09.gif"
      ],
    reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
        "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-01.gif",
        "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-03.gif",
        "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-04.gif",
      ],
    reviews: []
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
        "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-06.gif",
        "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-07.gif",
        "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-09.gif"
      ],
    reviews: []
  }];
})();