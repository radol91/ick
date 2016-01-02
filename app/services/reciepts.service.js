'use strict';

angular.module('kuchnia4U.recieptsService', []).service('recieptsService', recieptsService);

recieptsService.$inject = ['$http', '$q','$rootScope','recipeRepository'];

function recieptsService($http, $q, $rootScope, recipeRepository) {

    var reciepts = []; 
//		
//    reciepts[0] = {id: 1, title: "Reciept 1", description: "Lorem ipsum tekst tekst tekst. Lorem ipsum tekst tekst tekst. Lorem ipsum tekst tekst tekst. Lorem ipsum tekst tekst tekst.", img_url: "", category_id: 2};
//	reciepts[1] = {id: 2, title: "Reciept 2", description: "Lorem ipsum tekst tekst tekst.", img_url: "http://gfx.dlastudenta.pl/photos/dlastudentki/czosnek_potrawy320.jpg", category_id: 1};
//	reciepts[2] = {id: 3, title: "Reciept 3", description: "Lorem ipsum tekst tekst tekst.", img_url: "http://www.trextaurant.pl/wp-content/themes/trex/blueprint/gallery/ajaxupload/server/uploads/potrawy-1.jpg", category_id: 1};
//    reciepts[3] = {id: 4, title: "Reciept 4", description: "Podzielić oczyszczone skrzydełka na dwie części. Oprószyć pieprzem, solą oraz papryką. Obtoczyć skrzydełka w jajku, a następnie w mieszaninie mąki pszennej i kukurydzianej. Ułożyć na blaszcze wyłożonej papierem do pieczenia i piec ok. 20 min w piekarniku nagrzanym do 180°C. Przed podaniem usmażyć na głębokim tłuszczu do zarumienienia. Polać Sosem czosnkowym Tarsmak..", img_url: "http://businesstraveller.pl/wp-content/uploads/2013/09/potrawa-11-635x425.jpg", category_id: 2};
//	reciepts[4] = {id: 5, title: "Reciept 5", description: "Lorem ipsum tekst tekst tekst.", img_url: "http://www.novocaina.com/sites/default/files/styles/powieksze_galeria/public/g/pizza.jpg", category_id: 1};
//    reciepts[5] = {id: 6, title: "Reciept 6", description: "Lorem ipsum tekst tekst tekst.", img_url: "http://g.wieszjak.polki.pl/p/_wspolne/pliki_infornext/600000/fotolia_49074094_subscription_xxl1.jpg", category_id: 1};
//    reciepts[6] = {id: 7, title: "Reciept 7", description: "Lorem ipsum tekst tekst tekst.", img_url: "http://www.podwawrzynem.pl/img/galeria/galeria_potrawy/potrawy18.jpg", category_id: 1};
//    
	var recieptsService = {};

	recieptsService.getRecieptById = function(id)
	{ 
        var recipe =  recipeRepository.show({id : id}); 
        recieptsService.setRecipeImageUrl(recipe);
        
        //reciepts[functiontofindIndexByKeyValue(reciepts,"id",id)];

        return recipe;
    }

	recieptsService.getByCategoryId = function(category_id)
	{
        var recieptsFromCategory = recipeRepository.byCategoryId({categoryId : category_id});
        
        for(var i =0; i < recieptsFromCategory.length; i++){
            recieptsService.setRecipeImageUrl(recieptsFromCategory[i])
        }
        
        return recieptsFromCategory; 
    }
    
    recieptsService.setRecipeImageUrl = function(element){
        if (element.ImageUrl == undefined){
            element.ImageUrl = "http://placehold.it/350x150";
        }
    }
        
	return recieptsService;
};
