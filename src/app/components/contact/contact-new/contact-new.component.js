(function() {
  'use strict';

  //* ContactNew Component (STATEFUL COMPONENT)
  var contactNew = {
    bindings: {
      countries: '<'
    },
    templateUrl: './contact-new.html',
    controller: 'ContactNewController'
  }

  angular
    .module('components.contact')
    .component('contactNew', contactNew)
    .config(config);

    function config($stateProvider) {
      $stateProvider
        .state('new', {
          parent: 'app',
          url: '/new',
          component: 'contactNew',
          resolve:  {
            countries: resolveCountries
          }
        })
    }
    config.$inject = ['$stateProvider'];

    function resolveCountries(CountriesService) {
       return CountriesService.query();
    }
    resolveCountries.$inject = ['CountriesService'];


})();
