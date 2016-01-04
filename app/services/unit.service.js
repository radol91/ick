'use strict';

app.factory('unitService', [
function() {
    var units = [];
    
    units[0] = {Id: 1, Name: "g"};
    units[1] = {Id: 2, Name: "dg"};
    units[2] = {Id: 3, Name: "kg"};
    units[3] = {Id: 4, Name: "szt"};
    units[4] = {Id: 5, Name: "łyżka"};
    units[5] = {Id: 6, Name: "łyżeczka"};
    units[6] = {Id: 5, Name: "ml"};
    units[7] = {Id: 6, Name: "l"};
    units[8] = {Id: 7, Name: "kostek"};
    units[9] = {Id: 8, Name: "szklanek"};

	var unitService = {};

	unitService.getUnits = function()
	{
		return units;
	}

	return unitService;
}]);
