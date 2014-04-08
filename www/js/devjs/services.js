angular.module('starter.services', ['ngResource'])

/**
 * A simple example service that returns some data.
 */
.factory('ListService',['$resource', function($resource) {
		return $resource('http://115.113.151.200:8081/user/maphook/mobile/list_trends\\/', {}, { 
		query: {method:'GET', params:{}, isArray:false, cache:true}
	})
    }])


.factory('DetailService',['$resource', function($resource) {
		return $resource('http://115.113.151.200:8081/view_trend/:hookId/:hookType/', {}, { 
		query: {method:'GET', params:{}, isArray:false, cache:true}
	}); 
}])

.factory('EmployeeService', function($http,$stateParams) {

    var ergastAPI = {};
	

    ergastAPI.getList = function(callback) {
      return  $http({method:"JSONP",url:'http://115.113.151.200:8081/user/maphook/mobile/list_all_trends.jsp?callback=JSON_CALLBACK'}).success(callback);
    }
	
   ergastAPI.getEntryByID = function(callback) {
	//alert("get entery buy ID!"+callback);
      return $http({method: 'JSONP', url: 'http://115.113.151.200:8081/user/maphook/mobile/view_trend.jsp?entry-id='+$stateParams.employeeId+'&entry-type='+$stateParams.employeeType+'&callback=jsonp_Callback'}).success(callback);
    }	

    return ergastAPI;	

   
	

});












;






