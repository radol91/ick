/**
 * Load modules for application
 */

angular.module('kuchnia4U', [
        'ui.router', 'kuchnia4U.categoryService','kuchnia4U.recieptsService','kuchnia4U.ingredientService','kuchnia4U.unitService','acute.select'
    ])

    .constant('CONFIG', 
    {
	    DebugMode: true,
	    StepCounter: 0,
	    APIHost: 'http://kuchnia4you.azurewebsites.net/api/'
	}); 