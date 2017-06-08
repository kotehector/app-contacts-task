(function() {
  'use strict';

  ContactsController.$inject = ['$state', 'AvatarService'];
  //* Controller for ContactsComponent
  function ContactsController($state, AvatarService) {
    var ctrl = this;
    console.log('on contactsController');

    //* Init component
    ctrl.$onInit = function() {
      ctrl.avatar = null;
    }

    //* Get avatar from faker.js from service from hook.io
    ctrl.getAvatar = function(index) {
        AvatarService
          .getAvatar()
          .then(function (response) {
            ctrl.avatar = response;
            ctrl.avatarUrl = ctrl.avatar.replace(/[|&;$%@"<>()+,]/g, "");
            angular.element(document.querySelector('.wrapper-tile-' + index)).find('img').attr('src', ctrl.avatarUrl);
          }, function (error) {
            console.log(error);
            angular.element(document.querySelector('.wrapper-tile-' + index)).find('img').attr('src', 'img/avatar.png');
          });
    }

    //* Method to get detail contact
    ctrl.goToContact = function(event) {
      console.log(event);
      $state.go('contact', {
        id: event.contactId
      });
    }
  };


  angular
    .module('components.contact')
    .controller('ContactsController', ContactsController);

})();
