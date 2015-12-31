/**
 * Load modules for application
 */

var app = angular.module('kuchnia4U', ['ngResource','ui.router', 'kuchnia4U.categoryService','kuchnia4U.categoryRepository', 'kuchnia4U.recieptsService','kuchnia4U.ingredientService','kuchnia4U.unitService','acute.select'
    ])
    .constant('CONFIG', {
	    DebugMode: true,
	    StepCounter: 0,
	    APIHost: 'http://kuchnia4you.azurewebsites.net/api/'
	})
   .run(function ($rootScope){
       $rootScope.webservice = 'http://kuchnia4you.azurewebsites.net/api/';
   });