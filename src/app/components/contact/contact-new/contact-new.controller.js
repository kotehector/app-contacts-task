(function() {
  'use strict';

  ContactNewController.$inject = ['ContactService', '$state'];
  function ContactNewController(ContactService, $state) {
    var ctrl = this;
    ctrl.countries = null;

    ctrl.$onInit = function() {
      ctrl.contact = {
        name: '',
        email: '',
        surname: '',
        country: ''
      };
    };

    //* Function to create new contact on Firebase DDBB
    ctrl.createNewContact = function(event) {
      return ContactService
        .createNewContact(event.contact)
        .then(function(contact) {
          console.log(contact.key);
          console.log("succes save new contact!");
          $state.go('contact', {
            id: contact.key
          })
        }, function(error) {
          console.log(error);
        });
    };

  };


  angular
    .module('components.contact')
    .controller('ContactNewController', ContactNewController);

})();
