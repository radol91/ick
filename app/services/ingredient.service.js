'use strict';

angular.module('kuchnia4U.ingredientService', []).factory('ingredientService', ingredientService);

ingredientService.$inject = ['$http', '$q'];

function ingredientService($http, $q) {
    var ingredients = [];
    
    ingredients[0] = {id: 1, name: "mleko"};
    ingredients[1] = {id: 2, name: "jajko"};
    ingredients[2] = {id: 3, name: "mąka"};
    ingredients[3] = {id: 4, name: "sól"};
    ingredients[4] = {id: 5, name: "makaron"};
    ingredients[5] = {id: 6, name: "mięso mielone"};
    ingredients[6] = {id: 7, name: "pieprz"};
    ingredients[7] = {id: 8, name: "curry"};

	var ingredientService = {};

	ingredientService.getIngredients = function()
	{
		return ingredients;
	}

	return ingredientService;
};
