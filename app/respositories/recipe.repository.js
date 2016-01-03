'use strict';

angular.module('kuchnia4U.recipeRepository', []).factory('recipeRepository',recipeRepository);

recipeRepository.$inject = ['$rootScope', '$resource'];
  
function recipeRepository($rootScope, $resource){

    return $resource($rootScope.webservice + 'recipes/:id', {},{
        byCategoryId: { method: 'GET' , isArray: true },
        show: {method: 'GET'},
        create: { method: 'POST' }
    });
};