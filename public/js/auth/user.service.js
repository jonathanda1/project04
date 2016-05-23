(function () {
  'use strict';

  angular
    .module('app')
    .factory("userService", userService);

  userService.$inject = ["$log", "$http", "tokenService"];

  function userService($log, $http, tokenService) {
    $log.info("user service loaded!");

    var service = {
      create: create,
      show: show
    };
    return service;

    function create(data) {
      var promise = $http({
        method: 'POST',
        url:    '/api/users',
        data:   data
      });

      return promise;
    }

    function show() {
      var promise = $http({
        method: 'GET',
        url:    '/api/users/me',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenService.retrieve()}`
        }
      });
      return promise;
    }
  }

})();
