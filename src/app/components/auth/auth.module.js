(function(angular){
'use strict';

  config.$inject = ["$firebaseRefProvider"];
  run.$inject = ["$transitions", "$state", "authService"];
  angular
    .module('components.auth', [
      'ui.router',
      'firebase'
    ])
    .config(config)
    .run(run);

    //* Config Firebase APP(database,hosting)
  function config($firebaseRefProvider) {
    var config = {
       apiKey: "AIzaSyCTJ6uhmEnare29P3q5zwrSEgS1X0loKNw",
       authDomain: "contacts-manager-be7e6.firebaseapp.com",
       databaseURL: "https://contacts-manager-be7e6.firebaseio.com",
       projectId: "contacts-manager-be7e6",
       storageBucket: "contacts-manager-be7e6.appspot.com",
       messagingSenderId: "252477641268"
     };

     //* Register url to access database
     $firebaseRefProvider
        .registerUrl({
          default: config.databaseURL,
          contacts: config.databaseURL + '/contacts'
        });

     firebase.initializeApp(config);
  };


  function run ($transitions, $state, authService) {
    $transitions.onStart({
      to: function(state) {
        return (state.data && state.data.requireAuth);
      }
    }, function() {
      return authService
        .requireAuth()
        .catch(function() {
          return $state.target('auth.login');
        });
    });
    $transitions.onStart({
      to: 'auth.*'
    }, function() {
      if(authService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  };
})(window.angular);
