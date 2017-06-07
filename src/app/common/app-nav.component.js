(function() {
  'use strict';
  //* App Nav Component (STATELESS COMPONENT)
  var appNav =  {
    bindings: {
      user: '<',
      onLogout: '&'
    },
    templateUrl: './app-nav.html'
  }

  angular
    .module('common')
    .component('appNav', appNav);


})();
