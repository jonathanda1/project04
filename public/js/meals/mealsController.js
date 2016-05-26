(function () {
  angular.module('app')
    .controller("MealListController", MealListController)
    .controller("MealShowController", MealShowController)
    .controller("MealNewController", MealNewController)

MealListController.$inject = ['MealResource', 'authService', '$http'];
MealShowController.$inject = ['MealResource', '$stateParams'];
MealNewController.$inject = ['MealResource', '$state'];

// Listing all meals
function MealListController (MealResource, authService, $http) {
  var vm = this;
  vm.meals = [];
  vm.destroy = destroy;
  vm.authService = authService;
  // console.log("authservice", vm.authService.isLoggedIn());
  vm.addMealToUser = addMealToUser;

  // List all meals
  MealResource.query().$promise.then(function (meals) {
        vm.meals = meals;
      })

  // deleting meal from meal list
  function destroy(mealToDelete) {
    MealResource.delete({id: mealToDelete._id}).$promise.then(function(response) {
      vm.meals = vm.meals.filter(function(meal) {
        return meal != mealToDelete
      })
      console.log(vm.meals)
    })
  }

  // Taking from meal list and adding meal to user
    function addMealToUser(meal) {
    $http
      .put(`/api/users/me/meals/${meal._id}`, meal)
      .then(function(res) {
        console.log(res.data);
      },
      function(err) {
        console.log(err)
      });
  }

}

// Showing an individual meal
  function MealShowController(MealResource, $stateParams) {
    var vm = this;
    vm.meal = {};

    MealResource.get({id: $stateParams.id}).$promise.then(function(jsonMeal) {
      vm.meal = jsonMeal;
    });
  }

// Creating a new meal
  function MealNewController(MealResource, $state) {
    var vm = this;
    vm.newMeal = {};
    vm.addMeal = addMeal;

    function addMeal() {
      console.log("clicked")
      MealResource.save(vm.newMeal).$promise.then(function(jsonMeal) {
        vm.newMeal = {};
        $state.go('mealShow', {id: jsonMeal._id});
      });
    }
  }



})();
