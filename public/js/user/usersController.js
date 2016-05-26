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
      vm.totalCalories = totalCalories;
      vm.totalProtein = totalProtein;
      vm.totalFats = totalFats;
      vm.totalCarbs = totalCarbs;

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
            vm.user.data.meals = vm.user.data.meals.filter(function(meal) {
              console.log(meal)
              return meal._id != id;
            })
            console.log(vm.user.data.meals)
          },
          function(err) {
            console.log(err)
          });
      }

      function totalCalories () {
        if (!vm.user.data) {
          return 0;
        }

        var total = 0;
        for (var i = 0; i < vm.user.data.meals.length; i++){
          total = total + vm.user.data.meals[i].cals
        }
        return total;
      }

      function totalProtein () {
        if (!vm.user.data) {
          return 0;
        }
        var total = 0;
        for (var i = 0; i < vm.user.data.meals.length; i++) {
          total = total + vm.user.data.meals[i].protein
        }
        return total;
      }

      function totalFats () {
        if (!vm.user.data) {
          return 0;
        }
        var total = 0;
        for (var i = 0; i < vm.user.data.meals.length; i++) {
          total = total + vm.user.data.meals[i].fats
        }
        return total;
      }

      function totalCarbs () {
        if (!vm.user.data) {
          return 0;
        }
        var total = 0;
        for (var i = 0; i < vm.user.data.meals.length; i++) {
          total = total + vm.user.data.meals[i].carbs
        }
        return total;
      }

  }








})();
