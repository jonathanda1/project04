(function() {
    angular.module('app')
        .controller("UserController", UserController)

    UserController.$inject = ['UserResource', '$stateParams']

    // Shows User info
    function UserController (UserResource, $stateParams, userService) {
      console.log("UserController loaded")
      var vm = this;
      vm.user = {};
      // vm.deleteMeal = deleteMeal;

      UserResource.get({id: $stateParams.id}).$promise.then(function(jsonUser) {
        vm.user = jsonUser;
      });

      // function deleteMeal (mealToDelete) {
      //   var id = mealToDelete._id;
      //   $http
      //     .delete(`http://localhost:3000/api/users/me/meals/${id}`, meal)
      //     .then(function(res) {
      //       console.log(res.data);
      //       vm.all = vm.all.filter(function(meal) {
      //         return meal._id != id;
      //       })
      //     },
      //     function(err) {
      //       console.log(err)
      //     });
      // }

  }








})();
