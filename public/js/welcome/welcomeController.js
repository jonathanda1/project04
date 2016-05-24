(function() {
    angular.module('app')
        .controller("WelcomeController", WelcomeController)

    WelcomeController.$inject = []


    function WelcomeController () {
      var vm = this;
      vm.images = [];

    }
})
