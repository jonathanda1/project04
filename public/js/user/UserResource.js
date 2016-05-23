(function() {
  angular.module('app')
    .factory("UserResource", UserResource);

    UserResource.$inject = ['$resource'];

    function UserResource($resource) {
      return $resource(
        "/api/users/me",
        {id: '@id'}
        );
    }
})();
