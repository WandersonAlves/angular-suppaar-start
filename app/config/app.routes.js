(function() {
    angular
        .module('app')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        var homeState = {
                url: '/home',
                templateUrl: '/views/home-view.html',
                controller: "NavigationController",
                controllerAs: "navController",
                title: 'Inicio'
            };

        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('home', homeState);
    }
})();
