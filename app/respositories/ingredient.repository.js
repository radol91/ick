'use strict';

app.factory('ingredientRepository', ['$rootScope', '$resource',
function($rootScope, $resource){    
    return $resource($rootScope.webservice + 'ingredients/:id', {},{
        query :  { method: 'GET', isArray: true }
    });
}]);