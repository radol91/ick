'use strict';

app.factory('ingredientService', ['$rootScope',"ingredientRepository",
function($rootScope,ingredientRepository) {
	var ingredientService = {};

	ingredientService.getIngredients = function(){
		return ingredientRepository.query();
	}

	return ingredientService;
}]);
