(function () {
  angular.module('app')
    .controller("MealListController", MealListController)
    .controller("MealShowController", MealShowController)
    .controller("MealNewController", MealNewController)

MealListController.$inject = ['MealResource', 'authService'];
MealShowController.$inject = ['MealResource', '$stateParams'];
MealNewController.$inject = ['MealResource', '$state'];

function MealListController (MealResource, authService) {
  var vm = this;
  vm.meals = [];
  vm.destroy = destroy;
  vm.authService = authService;
  console.log("authservice")

  // List all meals
  MealResource.query().$promise.then(function (meals) {
        vm.meals = meals;
      })

  function destroy(mealToDelete) {
    MealResource.delete({id: mealToDelete._id}).$promise.then(function(response) {
      vm.meals = vm.meals.filter(function(meal) {
        return meal != mealToDelete
      })
    })
  }
}


  function MealShowController(MealResource, $stateParams) {
    var vm = this;
    vm.meal = {};

    MealResource.get({id: $stateParams.id}).$promise.then(function(jsonMeal) {
      vm.meal = jsonMeal;
    });
  }

  function MealNewController(MealResource, $state) {
    var vm = this;
    vm.newMeal = {};
    vm.addMeal = addMeal;

    function addMeal() {
      MealResource.save(vm.newMeal).$promise.then(function(jsonMeal) {
        vm.newMeal = {};
        $state.go('mealShow', {id: jsonMeal._id});
      });
    }
  }




})();
