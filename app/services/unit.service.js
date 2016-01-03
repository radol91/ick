'use strict';

app.factory('unitService', ['$http', '$q',
function($http, $q) {
    var units = [];
    
    units[0] = {id: 1, name: "g"};
    units[1] = {id: 2, name: "szt"};
    units[2] = {id: 3, name: "łyżek"};
    units[3] = {id: 4, name: "łyżeczek"};
    units[4] = {id: 5, name: "ml"};
    units[4] = {id: 6, name: "l"};
    units[5] = {id: 7, name: "kostki"};
    units[5] = {id: 8, name: "szklanki"};

	var unitService = {};

	unitService.getUnits = function()
	{
		return units;
	}

	return unitService;
}]);
