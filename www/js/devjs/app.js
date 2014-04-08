// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers','ngMap'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
   /* .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    }) */

    // the pet tab has its own child nav-view and history
    .state('list-index', {
      url: '/list',
      templateUrl: 'templates/list-index.html',
      controller: 'ListIndexCtrl'

    })
	
    .state('map-view', {
      url: '/map-view',
      templateUrl: 'templates/map-view.html',
      controller: 'MapViewCtrl'
    })
		

  /*  .state('hook-detail', {
      url: '/hook/:hookId/:hookType',
      templateUrl: 'templates/hook-detail.html',
      controller: 'HookDetailCtrl'
    })
*/
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/list');
  
    .state('employee-detail', {
       url: '/hook/:employeeId/:employeeType',
       templateUrl: 'templates/employee-detail.html',
       controller: 'EmployeeDetailCtrl'
    })  
  
  .state('employee-intro', {
					url: '/intro',
					templateUrl: 'templates/intro.html',
					controller: 'IntroCtrl'
  });
				
  $urlRouterProvider.otherwise('/list'); 

})


    .service('sharedProperties', function () {
        var property = {};

        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            }
        };
    });


