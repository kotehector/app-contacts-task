(function(angular){
'use strict';
//* REgister Component (STATEFUL COMPONENT)
var register = {
  templateUrl: './register.html',
  controller: 'RegisterController'
};

angular
  .module('components.auth')
  .component('register', register)
  .config(["$stateProvider", function ($stateProvider) {
    $stateProvider
      .state('auth.register', {
        url: '/register',
        component: 'register'
      });
  }]);
})(window.angular);
