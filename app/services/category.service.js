'use strict';

app.factory('categoryService', ['$rootScope', "categoryRepository",
function ($rootScope, categoryRepository) { 
	var categoryService = {};

	categoryService.getCategories = function(){
        return categoryRepository.query();
	}
    
    categoryService.getCategory = function(category_id){
        return categoryRepository.show({id : category_id});
	}

	return categoryService;
}]);
