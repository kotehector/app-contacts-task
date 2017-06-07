(function(angular){
'use strict';
  //* Root Module. Al components are injected
  config.$inject = ["$mdThemingProvider"];
  angular
    .module('root', [
      'common',
      'components',
      'templates',
      'ngMessages',
      'ngMaterial',
      'ngResource'
    ])
    .config(config);

    function config($mdThemingProvider) {
      $mdThemingProvider
        .theme('default')
        .primaryPalette('indigo')
        .accentPalette('blue')
        .warnPalette('red')
        .backgroundPalette('grey');
    }

})(window.angular);
