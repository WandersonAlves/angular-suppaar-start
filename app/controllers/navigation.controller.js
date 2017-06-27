
(function() {
    angular
        .module('app')
        .controller('NavigationController', NavigationController);

    function NavigationController($scope) {
        var vm = this;
        // NOTE Public functions

        var init = function() {
            console.log("Working as intended");
            vm.title = "Suuupaarr starttt";
        }();
    }
})();
