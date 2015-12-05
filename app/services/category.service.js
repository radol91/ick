'use strict';

angular.module('kuchnia4U.categoryService', []).factory('categoryService', categoryService);

categoryService.$inject = ['$http', '$q'];

function categoryService($http, $q) {
    var categories = [];
    
    categories[0] = {id: 1, name: "Ciasta i desery"};
    categories[1] = {id: 2, name: "Potrawy z jaj"};
    categories[2] = {id: 3, name: "Potrawy z ryb"};
    categories[3] = {id: 4, name: "Potrawy z makaronem"};
    categories[4] = {id: 5, name: "Potrawy z mięsa"};
    categories[5] = {id: 6, name: "Zupy"};
    categories[6] = {id: 7, name: "Inne"};

	var categoryService = {};

	categoryService.getCategories = function()
	{
		return categories;
	}

	return categoryService;
};
