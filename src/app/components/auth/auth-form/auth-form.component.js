(function() {
  'use strict';
  //* REgister Component (STATELESS COMPONENT)
  var authForm = {
    bindings: {
      user: '<',
      message: '@',
      button: '@',
      onSubmit: '&'
    },
    templateUrl: './auth-form.html',
    controller: 'authFormController'
  }

  angular
    .module('components.auth')
    .component('authForm', authForm);

})();
