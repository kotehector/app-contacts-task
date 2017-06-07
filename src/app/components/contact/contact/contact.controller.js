(function() {
  'use strict';

  function ContactController() {
    var ctrl = this;
    console.log('on contactController');

    //* Pass event to parent contanct to select detail contact
    ctrl.selectContact = function() {
      console.log(ctrl.contact.$id);
      ctrl.onSelect({
        $event: {
          contactId: ctrl.contact.$id
        }
      });
    }
  };

  angular
    .module('components.contact')
    .controller('ContactController', ContactController);

})();
