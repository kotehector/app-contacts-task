(function() {
  'use strict';

  AvatarService.$inject = ['$http'];
  //* Service to attack faker.js and get random avatars
  function AvatarService($http) {

    return {
      getAvatar: function() {
        var url = 'http://faker.hook.io/:property/';
        $http.get(url, {
          params: {
            property: 'internet.avatar'
          }
        }).then(function(response) {
          console.log(response.data);
          return response.data;
        });
      }
    }

  }


  angular
    .module('components.contact')
    .factory('AvatarService', AvatarService);

})();
