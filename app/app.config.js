/**
 * Load modules for application
 */

var app = angular.module('kuchnia4U', ['ngResource','ui.router','ngCookies']);

app.run(function ($rootScope){
       $rootScope.currentCategoryId = 1;
       $rootScope.webservice = 'http://kuchnia4you.azurewebsites.net/api/';
       $rootScope.defaultImage = 'http://placehold.it/350x250';
   });