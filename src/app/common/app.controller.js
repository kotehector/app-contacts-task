(function() {
  'use strict';

  AppController.$inject = ["authService", "$state"];
  function AppController(authService, $state) {
    var ctrl = this;
    ctrl.user = authService.getUser();
    //* Method to logout user on Firebase DDBB
    ctrl.logout = function() {
      console.log('onLogout');
      authService.logout().then(function(){
        $state.go('auth.login');
      })
    }
  }

  angular
    .module('common')
    .controller('AppController', AppController);


})();
