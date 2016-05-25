(function() {
    angular.module('app')
        .controller("UserController", UserController)

    UserController.$inject = ['UserResource', '$stateParams','userService','$http']

    // Shows User info
    function UserController (UserResource, $stateParams, userService, $http) {
      console.log("UserController loaded")
      var vm = this;
      vm.user = {};
      vm.deleteMeal = deleteMeal;

      UserResource.get({id: $stateParams.id}).$promise.then(function(jsonUser) {
        vm.user = jsonUser;
      });

    // deleting a meal from a user.meals collection
      function deleteMeal (mealToDelete) {
        console.log(vm.user.data.meals)
        var id = mealToDelete._id;
        console.log(id)
        $http
          .delete(`/api/users/me/meals/${id}`)
          .then(function(res) {
            // console.log(res);
            vm.user.data.meals = vm.user.data.meals.filter(function(meals) {
              return vm.user.data.meals._id != id;
            })
          },
          function(err) {
            console.log(err)
          });
      }

  }








})();
