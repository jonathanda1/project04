(function() {
  angular.module('app')
    .factory("MealResource", MealResource);

    MealResource.$inject = ['$resource'];

    function MealResource($resource) {
      return $resource(
        "/api/meals/:id",
        {id: '@id'}, {
          'update': { method: 'PUT'}
        }
        );
    }
})();
