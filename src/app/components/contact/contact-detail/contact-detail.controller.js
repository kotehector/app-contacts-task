(function() {
  'use strict';

  ContactDetailController.$inject = ["CountriesService"];
  function ContactDetailController(CountriesService) {
    var ctrl = this;
    ctrl.countries = CountriesService.query();
    console.log('on contactDetailController');

    ctrl.$onInit = function() {
      ctrl.isNewContact = !ctrl.contact.$id;
    }

    //* Pass event to parent component
    ctrl.saveContact = function() {
      ctrl.onSave({
        $event: {
          contact: ctrl.contact
        }
      });
    };

    //* Pass event to parent component
    ctrl.updateContact = function() {
      ctrl.onUpdate({
        $event: {
          contact: ctrl.contact
        }
      });
    };

    //* Pass event to parent component
    ctrl.deleteContact = function() {
      ctrl.onDelete({
        $event: {
          contact: ctrl.contact
        }
      });
    };

  };

  angular
    .module('components.contact')
    .controller('ContactDetailController', ContactDetailController);

})();
