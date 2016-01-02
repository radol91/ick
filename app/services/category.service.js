'use strict';

angular.module('kuchnia4U.categoryService', []).factory('categoryService', categoryService);

categoryService.$inject = ['$rootScope', "categoryRepository"];

function categoryService($rootScope, categoryRepository) {
    var categories = [];    
	var categoryService = {};

	categoryService.getCategories = function(){
        return categoryRepository.query();
	}
    
    categoryService.getCategory = function(category_id){
        return categoryRepository.show({id : category_id});
	}

	return categoryService;
};
