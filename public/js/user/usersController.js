(function() {
    angular.module('app')
        .controller("UserController", UserController)

    UserController.$inject = ['UserResource', '$stateParams']

    function UserController (UserResource, $stateParams, userService) {
      console.log("UserController loaded")
      var vm = this;
      vm.user = {};

      UserResource.get({id: $stateParams.id}).$promise.then(function(jsonUser) {
        vm.user = jsonUser;
      });


  }








})();
