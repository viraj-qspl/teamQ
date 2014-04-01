angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('ListIndexCtrl', function($scope, $ionicLoading, ListService, sharedProperties, $ionicLoading) {
  // "Pets" is a service returning mock data (services.js)
 // $scope.pets = ListService.all(); 

	  // Trigger the loading indicator
	 show = function() {
	 
		// Show the loading overlay and text
		$scope.loading = $ionicLoading.show({

		  // The text to display in the loading indicator
		  content: 'Loading',

		  // The animation to use
		  animation: 'fade-in',

		  // Will a dark overlay or backdrop cover the entire view
		  showBackdrop: true,

		  // The maximum width of the loading indicator
		  // Text will be wrapped if longer than maxWidth
		  maxWidth: 200,

		  // The delay in showing the indicator
		  showDelay: 500
		});
	  };

	  // Hide the loading indicator
	  hide = function(){
		$scope.loading.hide();
	  };
	  
	  
	  
	  
	show();

	ListService.query(
		function(data) {
			$scope.lists = data;
			hide();
		}
	);		
	//$scope.lists = returnObject; 


	$scope.onSuccess = function(position) {
       
        $scope.pos= {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            timestamp: position.timestamp
        }
		
		sharedProperties.setProperty($scope.pos);
		
    };

     $scope.onError = function(error) {
     //   alert('code: '    + error.code    + '\n' +
     //        'message: ' + error.message + '\n');
		
	    //alert('In Error Mode');
		sharedProperties.setProperty('No Data');
			
    }

    navigator.geolocation.getCurrentPosition($scope.onSuccess,$scope.onError);


})


// A simple controller that shows a tapped item's data
.controller('HookDetailCtrl', function($scope, $stateParams, DetailService) {
  // "Pets" is a service returning mock data (services.js)
	//$scope.hook = DetailService.get($stateParams.hookId,$stateParams.hookType);
	
	//alert($stateParams.hookId);
	//alert($stateParams.hookType);
	
//'?entry-id='+$stateParams.hookId+'&entry-type='+$stateParams.type


})


 .controller('MapViewCtrl', function($scope, $ionicLoading, sharedProperties, ListService, $interval) {
 
 
 	 show = function() {
	 
		// Show the loading overlay and text
		$scope.loading = $ionicLoading.show({

		  // The text to display in the loading indicator
		  content: 'Loading',

		  // The animation to use
		  animation: 'fade-in',

		  // Will a dark overlay or backdrop cover the entire view
		  showBackdrop: true,

		  // The maximum width of the loading indicator
		  // Text will be wrapped if longer than maxWidth
		  maxWidth: 200,

		  // The delay in showing the indicator
		  showDelay: 500
		});
	  };

	  // Hide the loading indicator
	  hide = function(){
		$scope.loading.hide();
	  };
 
	$scope.position = sharedProperties.getProperty();
 
	show();
	ListService.query(
		function(data)
		{
			$scope.lists = data;
			hide();
		}
	);		

 
})

.controller('IntroCtrl', function($scope, $location) {

	function test() {
		setTimeout("test",5000);     

		// code that you cannot modify?
	}

	test();	
    
	$location.path('/list'); 	
	
    });

