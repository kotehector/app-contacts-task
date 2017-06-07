(function() {
  'use strict';

  ContactsController.$inject = ['$state', '$window', '$http', 'AvatarService'];
  //* Controller for ContactsComponent
  function ContactsController($state, $window, $http, AvatarService) {
    var ctrl = this;
    console.log('on contactsController');

    //* Init component
    ctrl.$onInit = function() {
      ctrl.avatar = null;
    }

    //* Method to get random avatar and inject on ng-repeat list contacts
    ctrl.getAvatar = function(index) {
      var url = 'http://faker.hook.io/:property/';
      $http.get(url, {
        params: {
          property: 'image.avatar'
        }
      }).then(function(response) {
        console.log(response.data);
        ctrl.avatar = response.data;
        console.log(ctrl.avatar);
        ctrl.avatarUrl = ctrl.avatar.replace(/[|&;$%@"<>()+,]/g, "");
        angular.element(document.querySelector('.wrapper-tile-' + index)).find('img').attr('src', ctrl.avatarUrl);
      });

      //angular.element(document.querySelector('grey')).addClass('wrapper-tile-' + index);
      // return AvatarService.getAvatar()
      //                 .then(function(response) {
      //                   ctrl.avatar = response;
      //                   ctrl.avatarUrl = ctrl.avatar.replace(/[|&;$%@"<>()+,]/g, "");
      //                   angular.element(document.querySelector('.wrapper-tile-' + index)).find('img').attr('src', ctrl.avatarUrl);
      //               });
      // console.log(ctrl.avatar);
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
