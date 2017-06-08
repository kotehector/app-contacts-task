(function() {
  'use strict';

  /**
   * Service with methods for attack Firebase DDBB
   */
  function ContactService(authService, $firebaseRef, $firebaseArray, $firebaseObject) {
    var ref = $firebaseRef.contacts;
    var uid = authService.getUser().uid;

    return {
      createNewContact: function(contact) {
        return $firebaseArray(ref.child(uid)).$add(contact);
      },
      getContactById: function(id) {
        return $firebaseObject(ref.child(uid).child(id));
      },
      updateContact: function(contact) {
        return contact.$save();
      },
      deleteContact: function(contact) {
        return contact.$remove();
      },
      getContactsList: function() {
        return $firebaseArray(ref.child(uid));
      }
    }
  };
  ContactService.$inject = ['authService', '$firebaseRef', '$firebaseArray', '$firebaseObject'];

  angular
    .module('components.contact')
    .factory('ContactService', ContactService);

})();
