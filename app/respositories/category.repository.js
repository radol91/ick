'use strict';

app.factory('categoryRepository',['$rootScope', '$resource',  
function($rootScope, $resource){
    return $resource($rootScope.webservice + 'categories/:id', {},{
        query: { method: 'GET', isArray: true },
        show: { method: 'GET'}
    });
}]);