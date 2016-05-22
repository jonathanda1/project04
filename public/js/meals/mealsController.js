(function () {
  angular.module('app')
    .controller("MealListController", MealListController)

MealListController.$inject = ['MealResource'];

function MealListController (MealResource) {
  var vm = this;
  vm.meals = [];
  vm.destroy = destroy;

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




})();
