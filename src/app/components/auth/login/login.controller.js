(function(angular){
'use strict';
LoginController.$inject = ["authService", "$state"];
function LoginController(authService, $state) {
  var ctrl = this;

  /**
   * Init component on hook cycle with variables that we use
   */
  ctrl.$onInit = function() {
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: ''
    }
  }

  /**
   * Method to login user on Firebase DataBase
   * @param  {user} event data of user on form
   */
  ctrl.loginUser = function(event) {
    console.log(event.user);
    return authService
      .login(event.user)
      .then(function(user) {
        console.log(user);
        $state.go('app');
      }, function(error) {
        ctrl.error = error.message;
      });
  }
}

angular
  .module('components.auth')
  .controller('LoginController', LoginController);
})(window.angular);
