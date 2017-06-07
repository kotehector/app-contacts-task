(function() {
  'use strict';

  ContactEditController.$inject = ['$state', 'ContactService', '$stateParams', '$window', '$mdDialog'];
  function ContactEditController($state, ContactService, $stateParams, $window, $mdDialog) {
    var ctrl = this;
    console.log('on contactEditController');
    ctrl.countries = null;

    ctrl.contact = ContactService.getContactById($stateParams.id);

    //* Update Contact on Firebase DDBB
    ctrl.updateContact = function(event) {
      return ContactService
        .updateContact(event.contact);
    };

    //* Delete Contact on Firebase DDBB with Dialog form AngularMaterial
    ctrl.deleteContact = function(event) {
      var confirm = $mdDialog.confirm()
          .title('Would you like to delete your debt?')
          .textContent('All of the banks have agreed to forgive you your debts.')
          .ariaLabel('Lucky day')
          .targetEvent(event)
          .ok('Please do it!')
          .cancel('Sounds like a scam');

      $mdDialog.show(confirm).then(function() {
        return ContactService
            .deleteContact(event.contact)
            .then(function() {
              $state.go('contacts');
            })
      });

    };

  };

  angular
    .module('components.contact')
    .controller('ContactEditController', ContactEditController);

})();
