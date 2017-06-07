(function() {
  'use strict';
  //* Contact Detail (STATELESS COMPONENT)
  var contactDetail = {
    bindings:  {
      contact: '<',
      onSave: '&',
      onUpdate: '&',
      onDelete: '&'
    },
    templateUrl: './contact-detail.html',
    controller: 'ContactDetailController'
  }

  angular
    .module('components.contact')
    .component('contactDetail', contactDetail);

})();
