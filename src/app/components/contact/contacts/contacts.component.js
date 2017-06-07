(function() {
  'use strict';
  //* Contact Component (STATEFUL)
  var contacts = {
    bindings:  {
      contacts: '<'
    },
    templateUrl: './contacts.html',
    controller: 'ContactsController'
  }

  angular
    .module('components.contact')
    .component('contacts', contacts)
    .config(config);

    //* Config route and resolve data
    function config($stateProvider) {
      $stateProvider
        .state('contacts', {
          parent: 'app',
          url: '/contacts',
          component: 'contacts',
          resolve: {
            contacts: resolveContacts
          }
        });
    };
    config.$inject = ['$stateProvider'];

    function resolveContacts(ContactService) {
      return ContactService
              .getContactsList().$loaded();
    }
    resolveContacts.$inject = ['ContactService'];

})();
