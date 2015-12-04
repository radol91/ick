'use strict';

angular.module('kuchnia4U.recieptsService', []).service('recieptsService', recieptsService);

recieptsService.$inject = ['$http', '$q'];

function recieptsService($http, $q) {

    var reciepts = []; 
		
    reciepts[0] = {id: 1, title: "Reciept 1", description: "Lorem ipsum tekst tekst tekst. Lorem ipsum tekst tekst tekst. Lorem ipsum tekst tekst tekst. Lorem ipsum tekst tekst tekst.", img_url: ""};
	reciepts[1] = {id: 2, title: "Reciept 2", description: "Lorem ipsum tekst tekst tekst.", img_url: ""};
	reciepts[2] = {id: 3, title: "Reciept 3", description: "Lorem ipsum tekst tekst tekst.", img_url: ""};
    reciepts[3] = {id: 4, title: "Reciept 4", description: "Podzielić oczyszczone skrzydełka na dwie części. Oprószyć pieprzem, solą oraz papryką. Obtoczyć skrzydełka w jajku, a następnie w mieszaninie mąki pszennej i kukurydzianej. Ułożyć na blaszcze wyłożonej papierem do pieczenia i piec ok. 20 min w piekarniku nagrzanym do 180°C. Przed podaniem usmażyć na głębokim tłuszczu do zarumienienia. Polać Sosem czosnkowym Tarsmak..", img_url: "http://businesstraveller.pl/wp-content/uploads/2013/09/potrawa-11-635x425.jpg"};
	reciepts[4] = {id: 5, title: "Reciept 5", description: "Lorem ipsum tekst tekst tekst.", img_url: ""};
    reciepts[5] = {id: 6, title: "Reciept 6", description: "Lorem ipsum tekst tekst tekst.", img_url: ""};
    reciepts[6] = {id: 7, title: "Reciept 7", description: "Lorem ipsum tekst tekst tekst.", img_url: ""};
    
	var recieptsService = {};

	recieptsService.getRecieptById = function(id)
	{
        return reciepts[functiontofindIndexByKeyValue(reciepts,"id",id)];
    }

	recieptsService.getByCategory = function(id)
	{
		return reciepts;
	}
    
    
	return recieptsService;
};

function functiontofindIndexByKeyValue(arraytosearch, key, valuetosearch) { 
    for (var i = 0; i < arraytosearch.length; i++) {
            if (arraytosearch[i][key] == valuetosearch) {
                return i;
            }
        }
    
    return null;
}
