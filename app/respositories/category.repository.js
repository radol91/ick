'use strict';

angular.module('kuchnia4U.categoryRepository', []).factory('categoryRepository',categoryRepository);

categoryRepository.$inject = ['$rootScope', '$resource'];
  
function categoryRepository($rootScope, $resource){
    return $resource($rootScope.webservice + 'categories', {},{
        query: { method: 'GET', isArray: true }
    });
};