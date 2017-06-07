(function(angular){
'use strict';

  //* Service for attack FirebaseAuth Service
  authService.$inject = ["$firebaseAuth"];
  function authService($firebaseAuth) {
    var auth = $firebaseAuth();
    var authData = null;

    //* Save data user when is autenticated
    function storeAuthData(response) {
      authData = response;
      return authData;
    }

    //* Method to login on Firebase DDBB
    function onSignIn(user) {
      authData = user;
      return auth.$requireSignIn();
    }

    //* Clear data of user logged
    function clearAuthData() {
      authData = null;
    }

    //* Method to register user on Firebase DDBB
    this.register = function (user) {
      return auth
        .$createUserWithEmailAndPassword(user.email, user.password)
        .then(storeAuthData);
    }

    //* Method to login user on Firebase BBDD
    this.login = function (user) {
      return auth
        .$signInWithEmailAndPassword(user.email, user.password)
        .then(storeAuthData)
    }

    //* Method to logout user on Firebase BBDD
    this.logout = function() {
      return auth
        .$signOut()
        .then(clearAuthData);
    }

    //* Method to required autoritation user on Firebase BBDD
    this.requireAuth = function() {
      return  auth
        .$waitForSignIn()
        .then(onSignIn);
    }

    //* Check if user is authenticade
    this.isAuthenticated = function() {
      return !!authData; // null
    }

    //* Get user data from Firebase DDBB
    this.getUser = function() {
      if(authData) {
        return authData;
      }
    }

  };

  angular
    .module('components.auth')
    .service('authService', authService);
})(window.angular);
