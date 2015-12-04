/**
 * Load modules for application
 */

angular.module('kuchnia4U', [
        'ui.router', 'kuchnia4U.categoryService','kuchnia4U.recieptsService'
    ])

    .constant('CONFIG', 
    {
	    DebugMode: true,
	    StepCounter: 0,
	    APIHost: 'http://localhost:12017'
	}); 