(function() {
  'use strict';

  CountriesService.$inject = ["$resource"];
  function CountriesService($resource) {
    //var urlAPI = 'http://data.okfn.org/data/core/country-list/r/data.json';
    var urlAPI = 'app/data.json';

    return $resource(urlAPI);
  }


  angular
    .module('components.contact')
    .factory('CountriesService', CountriesService);

})();
