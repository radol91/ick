'use strict';

app.factory('recipeRepository', ['$rootScope', '$resource',
  
function ($rootScope, $resource){    
    return $resource($rootScope.webservice + 'recipes/:id', {},{
        byCategoryId: { method: 'GET' , isArray: true },
        show: {method: 'GET'},
        save: { method: 'POST' }
    });
}]);