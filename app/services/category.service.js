'use strict';

angular.module('kuchnia4U.categoryService', []).factory('categoryService', categoryService);

categoryService.$inject = ['$http', '$q'];

function categoryService($http, $q) {

	var categoryService = {};

	categoryService.getCategories = function()
	{
		return ['Ciasta i desery', 'Potrawy z jaj', 'Potrawy z ryb', 'Potrawy z makaronem', 'Potrawy z mięsa', 'Zupy','Inne'];//$http.get(APIHost+'/GetCategories');
	}

	return categoryService;
};
