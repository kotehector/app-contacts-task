(function() {
  'use strict';

  config.$inject = ["$stateProvider"];
  //* App Component (ROUTE COMPONENT)
  var app = {
    templateUrl: './app.html',
    controller: 'AppController'
  };

  angular
    .module('common')
    .component('app', app)
    .config(config);

    function config($stateProvider) {
      $stateProvider
        .state('app', {
          redirectTo: 'contacts',
          url: '/app',
          data: {
            requireAuth: true
          },
          component: 'app'
        });
    }



})();
