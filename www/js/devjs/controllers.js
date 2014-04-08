
var callback$scope;

angular.module('starter.controllers', [])

// A simple controller that fetches a list of data from a service
.controller('ListIndexCtrl', function($scope, ListService, sharedProperties, $ionicLoading) {
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
	
	//alert($scope.position);
	
	if($scope.position == 'No Data')
	{
		
		$scope.position= {
            latitude: 43.6650000,
            longitude: -79.4103000,
        }	
	}
 
	show();
	ListService.query(
		function(data)
		{
			$scope.lists = data;
			hide();
		}
	);		

 
})

.controller('EmployeeDetailCtrl' , [ '$scope', '$http','$stateParams','EmployeeService','sharedProperties','$interval', function ($scope, $http ,  $stateParams , EmployeeService,sharedProperties,$interval,$ionicLoading) {
  
		callback$scope = $scope;
		call$interval = $interval;
		/*$scope.show = function() {
	 
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
	  $scope.hide = function(){
		$scope.loading.hide();
	  };*/
	  	  
		showLoading = function() {
			$scope.loading = $ionicLoading.show({
			  content: 'Loading',
			});
		};
		
		hideLoading = function(){
			$scope.loading.hide();
		};
		
		
		//showLoading();
	
		EmployeeService.getEntryByID(function(results) {
			//console.log("data from server:"+results);
				//alert("Here now in detail controler!"+results);
			//  $scope.hideLoading();	
		      $scope.employee = results.trend[0];
		      $scope.pictures = results.trend[0].images;	
			  $scope.tips =  eval(results.trend[0].tips);
			   
			   
			 $scope.map = {
				  center: {
						latitude: results.trend[0].latitude,
						longitude: results.trend[0].longitude
					},
					zoom: 1
				}; 
						
		});
	
 	}])



.controller('IntroCtrl', function($scope, $location) {

	function test() {
		setTimeout("test",5000);     

		// code that you cannot modify?
	}

	test();	
    
	$location.path('/list'); 	
	
    });

	
function jsonp_Callback(data){
    //alert("in a jsonp callback mehtod!");	
    callback$scope.employee = eval(data.trend[0]);
	 callback$scope.images =  eval(data.trend[0].images);
	  callback$scope.tips =  eval(data.trend[0].tips);
	
      
	 
			callback$scope.GenerateMapMarkers = function() {	
			
				var title = data.trend[0].title;
				var markerIcon = data.trend[0].type + "-hook.png";
				var markers = []; 
				//for (var i = 0; i < 8; i++) { 
				
				//markers[0].setIcon(markerIcon);
				
				var latitude = data.trend[0].latitude; 
				var longitude = data.trend[0].longitude; 	
			
				//alert(latitude+" "+longitude+ data.trend[0].type + "-hook.png");	
				
				var loc = new google.maps.LatLng(latitude, longitude); 
                
                markers[0] = new google.maps.Marker({ title: data.trend[0].title , center : loc,icon : markerIcon });
				markers[0].setPosition(loc); 
				markers[0].setMap(callback$scope.map);
				
				var infowindow = new google.maps.InfoWindow({
					content: "<span style='color:#000000;padding:2px;overflow:hidden;'>"+title+"</span>"
				});
				 
				google.maps.event.addListener(markers[0], 'click', function() {
					infowindow.open(callback$scope.map,markers[0]);
				});

				//alert("here now!");
				
				//callback$scope.map.setCenter(loc);
                
                	//alert("here now after center!");
					
			}
			
			//callback$scope.GenerateMapMarkers();
    return data;
}	
	
	
	
	
	
	
	
	
	
	
