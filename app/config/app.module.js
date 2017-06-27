(function() {

    var EndpointApi = {
        BASE: 'http://localhost:8080/',
        API: 'api/'
    };

    angular.module('app', ['ui.router']).constant('EndpointApi', EndpointApi);
})();
