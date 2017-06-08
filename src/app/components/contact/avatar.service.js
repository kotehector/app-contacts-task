(function() {
  'use strict';

  AvatarService.$inject = ['$http'];
  //* Service to attack faker.js and get random avatars
  function AvatarService($http) {

    var url = 'http://faker.hook.io/:property';

     this.getAvatar =  function() {
        return $http.get(url, {
          params: {
            property: 'image.avatar'
          }
        }).then(function(response) {
          return response.data;
        });
      }

   }


  angular
    .module('components.contact')
    .service('AvatarService', AvatarService);

})();
