(function() {
  'use strict';

  //* Contact Edit (STATEFUL COMPONENT)
  var contactEdit = {
    templateUrl: './contact-edit.html',
    controller: 'ContactEditController'
  }

  angular
    .module('components.contact')
    .component('contactEdit', contactEdit)
    .config(config);

    function config($stateProvider) {
      $stateProvider
        .state('contact', {
          parent: 'app',
          url: '/contact/:id',
          component: 'contactEdit'
        });
    };
    config.$inject = ['$stateProvider'];

    function resolveContact($transition$, ContactService) {
      var key = $transition$.params().id;
      console.log(key);
      //return;
      return ContactService.getContactById(key).$loaded();
    }
    resolveContact.$inject = [ '$transition$', 'ContactService'];

})();
