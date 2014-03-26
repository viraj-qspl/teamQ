angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('ListIndexCtrl', function($scope, ListService, sharedProperties) {
  // "Pets" is a service returning mock data (services.js)
 // $scope.pets = ListService.all();
 

 
	var returnObject =  ListService.query();		
	$scope.lists = returnObject;

})


// A simple controller that shows a tapped item's data
.controller('HookDetailCtrl', function($scope, $stateParams, DetailService) {
  // "Pets" is a service returning mock data (services.js)
	$scope.hook = DetailService.get($stateParams.hookId,$stateParams.hookType);
	
	//alert($stateParams.hookId);
	//alert($stateParams.hookType);
	
	
	
 
//'?entry-id='+$stateParams.hookId+'&entry-type='+$stateParams.type


})


 .controller('MapViewCtrl', function($scope, $ionicLoading, sharedProperties, ListService) {
 
	var returnObject =  ListService.query();		
	$scope.lists = returnObject;
 
	$scope.map = {
		center: {
			latitude: 45,
			longitude: -73
		},
		zoom: 1
	}; 
});

