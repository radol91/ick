'use strict';

angular.module('kuchnia4U.categoryService', []).factory('categoryService', categoryService);

categoryService.$inject = ['$rootScope', "categoryRepository"];

function categoryService($rootScope, categoryRepository) {
    var categories = [];    
	var categoryService = {};

	categoryService.getCategories = function()
	{
        return categoryRepository.query();
	}

	return categoryService;
};
