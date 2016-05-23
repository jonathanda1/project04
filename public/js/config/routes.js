(function() {
  "use strict";

  angular
    .module("app")
    .config(appRoutes);

  appRoutes.$inject = ["$urlRouterProvider", "$stateProvider"];

  function appRoutes($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state("welcome", {
        url:         "/",
        templateUrl: "/js/welcome.html"
      })
      .state("signin", {
        url:          "/signin",
        templateUrl:  "/js/signin.html",
        controller:   "SignInController",
        controllerAs: "vm"
      })
      .state("profile", {
        url:         "/profile",
        templateUrl: "/js/profile.html"
      })
      .state("mealList", {
        url:         "/meals/list",
        templateUrl: "/js/meals/meal-list.html",
        controller:  "MealListController",
        controllerAs:"mealListVm"
      })
      .state("mealNew", {
        url:         "/meals/new",
        templateUrl: "js/meals/meal-new.html",
        controller:  "MealNewController",
        controllerAs:"mealNewVm"
      })
      .state("mealShow", {
        url:         "/meals/:id",
        templateUrl: "js/meals/meal-show.html",
        controller:  "MealShowController",
        controllerAs:"mealShowVm"
      })

    $urlRouterProvider.otherwise("/");
  }

})();
