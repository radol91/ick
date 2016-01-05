'use strict';

app.factory('unitService', [
function() {
    var units = [];
    
    units[0] = {Id: 0, Name: "g"};
    units[1] = {Id: 1, Name: "dg"};
    units[2] = {Id: 2, Name: "kg"};
    units[3] = {Id: 3, Name: "szt"};
    units[4] = {Id: 4, Name: "łyżka"};
    units[5] = {Id: 5, Name: "łyżki"};
    units[6] = {Id: 6, Name: "łyżeczka"};
    units[7] = {Id: 7, Name: "łyżeczki"};
    units[8] = {Id: 8, Name: "ml"};
    units[9] = {Id: 9, Name: "l"};
    units[10] = {Id: 10, Name: "kostek"};
    units[11] = {Id: 11, Name: "kostki"};
    units[12] = {Id: 12, Name: "kostka"};
    units[13] = {Id: 13, Name: "szklanek"};
    units[14] = {Id: 14, Name: "szklanka"};
    units[15] = {Id: 15, Name: "szklanki"};
    units[16] = {Id: 16, Name: "opakowanie"};
    units[17] = {Id: 17, Name: "opakowania"};

	var unitService = {};

	unitService.getUnits = function()
	{
		return units;
	}

	return unitService;
}]);
