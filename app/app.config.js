/**
 * Load modules for application
 */

var app = angular.module('kuchnia4U', ['ngResource','ui.router', 'kuchnia4U.categoryService','kuchnia4U.categoryRepository','kuchnia4U.recipeRepository', 'kuchnia4U.recieptsService','kuchnia4U.ingredientService','kuchnia4U.unitService','ngCookies'
    ])
   .run(function ($rootScope){
       $rootScope.currentCategoryId = 1;
       $rootScope.webservice = 'http://kuchnia4you.azurewebsites.net/api/';
       $rootScope.defaultImage = 'http://placehold.it/350x250';
   });