(function() {
  'use strict';

  function authFormController() {
    var ctrl = this;

    ctrl.$onChanges = function(changes) {
      if(changes.user) {
        ctrl.user = angular.copy(ctrl.user);
      }
    };

    ctrl.submitForm = function() {
      console.log('on submit');
      ctrl.onSubmit({
        $event: {
          user: ctrl.user
        }
      })
    }
  };

  angular
    .module('components.auth')
    .controller('authFormController', authFormController);

})();
