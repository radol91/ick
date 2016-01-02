/**
 * Load states for application
 * more info on UI-Router states can be found at
 * https://github.com/angular-ui/ui-router/wiki
 */
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    // any unknown URLS go to 404
    $urlRouterProvider.otherwise('/404');
    // no route goes to index
    $urlRouterProvider.when('', '/');
    // use a state provider for routing

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/components/home/home.view.html',
            controller: 'homeController',
        })
        .state('reciept', {
            url: '/reciept/:id',
            templateUrl: 'app/components/reciept/reciept.view.html',
            controller: 'recieptController'
        })
        .state('reciept/steps', {
            url: '/reciept/steps/:id',
            templateUrl: 'app/components/reciept/reciept.steps.view.html',
            controller: 'recieptController'
        })
        .state('reciept/new', {
            url: '/reciept/new/:category_id',
            templateUrl: 'app/components/reciept/reciept.new.view.html',
            controller: 'recieptNewController'
        })
        .state('reciept/edit', {
            url: '/reciept/edit/:recipe_id',
            templateUrl: 'app/components/reciept/reciept.new.view.html',
            controller: 'recieptNewController'
        })
        .state('reciept/new/steps', {
            url: '/reciept/new/steps/:recipe_id',
            templateUrl: 'app/components/reciept/reciept.new.steps.view.html',
            controller: 'recieptNewController'
        })
        .state('reciept/new/ingredients', {
            url: '/reciept/new/ingredients/:recipe_id',
            templateUrl: 'app/components/reciept/reciept.new.ingredients.view.html',
            controller: 'recieptNewController'
        })
        .state('search', {
            url: '/search',
            templateUrl: 'app/components/search/search.view.html',
            controller: 'searchController',
        })
        .state('shopping_list', {
            url: '/shopping_list',
            templateUrl: 'app/components/shopping_list/shopping_list.view.html',
            controller: 'shoppingListController',
        })
        .state('favourites', {
            url: '/favourites',
            templateUrl: 'app/components/favourites/favourites.view.html',
            controller: 'favouritesController',
        })
        .state('404', {
            url: '/404',
            templateUrl: 'app/shared/404.html'
        });
}]);