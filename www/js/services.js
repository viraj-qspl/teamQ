angular.module('starter.services', ['ngResource'])

/**
 * A simple example service that returns some data.
 */
.factory('ListService',['$resource', function($resource) {
		return $resource('http://115.113.151.200:8081/user/maphook/mobile/list_trends\\/', {}, { 
		query: {method:'GET', params:{}, isArray:false, cache:true}
	}); 
}])


.factory('DetailService',['$resource', function($resource) {
		return $resource('http://115.113.151.200:8081/view_trend/:hookId/:hookType/', {}, { 
		query: {method:'GET', params:{}, isArray:false, cache:true}
	}); 
}]);



