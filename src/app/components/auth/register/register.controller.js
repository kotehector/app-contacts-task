(function(angular){
'use strict';
RegisterController.$inject = ["authService", "$state"];
function RegisterController(authService, $state) {
  var ctrl = this;

  /**
   * Init variables component to use on view
   * @return {[type]} [description]
   */
  ctrl.$onInit = function() {
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: ''
    }
  }

  /**
   * Function for register user on Firebase database
   * @param  {user} event on submit event from form
   */
  ctrl.registerUser = function(event) {
    console.log(event);
    return authService
      .register(event.user)
      .then(function(user) {
        console.log(user);
        // $state.go('app')
      }, function (error) {
        ctrl.error = error.message
      });
  }
}

angular
  .module('components.auth')
  .controller('RegisterController', RegisterController);
})(window.angular);
