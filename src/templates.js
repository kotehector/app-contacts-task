angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./root.html','  <div class="root">\n    <div>\n      <div ui-view></div>\n    </div>\n  </div>\n');
$templateCache.put('./app-nav.html','<md-toolbar layout="row"\n            layout-align="space-between center"\n            class="md-toolbar-tools"\n            layout-padding\n            layout-margin\n            layout-fill\n            style="min-height: 70px;">\n\n  <div flex="20" flex-gt-sm="50">\n      <h1>Contacts Manager</h1>\n  </div>\n\n  <div flex="20" hide-sm hide-xs>\n      {{ ::$ctrl.user.email }}\n  </div>\n\n  <div flex="20" flex-gt-sm="50">\n    <md-button class="md-fab md-mini"\n               ui-sref="new">\n      <md-icon>person_add</md-icon>\n    </md-button>\n  </div>\n\n  <div flex="20" flex-gt-sm="50">\n    <md-button class="md-fab md-mini"\n               ui-sref="contacts">\n      <md-icon>people</md-icon>\n    </md-button>\n  </div>\n\n  <div flex="20" flex-gt-sm="50">\n    <md-button class="md-accent"\n               ng-click="$ctrl.onLogout();">\n      Logout\n    </md-button>\n  </div>\n\n</md-toolbar>\n');
$templateCache.put('./app.html','<div class="root">\n\n  <app-nav\n    user="$ctrl.user"\n    on-logout="$ctrl.logout();">\n  </app-nav>\n\n  <div class="app">\n    <div ui-view></div>\n  </div>\n</div>\n');
$templateCache.put('./login.html','<md-toolbar class="md-theme-indigo">\n  <h1 class="md-toolbar-tools md-display-3">Login</h1>\n</md-toolbar>\n\n<auth-form\n  user="$ctrl.user"\n  message="{{ $ctrl.error }}"\n  button="Login"\n  on-submit="$ctrl.loginUser($event)">\n</auth-form>\n\n<md-button class="md-primary"\n           ui-sref="auth.register">\n  Don\'t have an account? Create one here.\n</md-button>\n');
$templateCache.put('./register.html','\n<h1 class="md-display-3">Register</h1>\n\n<auth-form\n  user="$ctrl.user"\n  message="{{ $ctrl.error }}"\n  button="Register"\n  on-submit="$ctrl.registerUser($event)">\n</auth-form>\n\n<md-button class="md-primary"\n           ui-sref="auth.login">\n  Already have an account? Login here.\n</md-button>\n');
$templateCache.put('./auth-form.html','<form name="authForm" novalidate ng-submit="$ctrl.submitForm();">\n\n  <md-input-container class="md-block">\n    <md-icon md-colors="{color: \'primary-900-0.5\'}">email</md-icon>\n    <label>Enter your email</label>\n    <input ng-model="$ctrl.user.email"\n          type="email"\n          name=\'email\'\n          required="required">\n      <div ng-messages="authForm.email.$error">\n        <div ng-message="required">This field is required</div>\n        <div ng-message="email">This filed should be a valid email</div>\n      </div>\n  </md-input-container>\n\n  <md-input-container class="md-icon-float md-block">\n    <md-icon md-colors="{color: \'primary-900-0.5\'}"><i class="material-icons">lock_outline</i></md-icon>\n    <label>Enter your password</label>\n    <md-icon>password</md-icon>\n    <input type="password"\n           ng-model="$ctrl.user.password"\n           name="password"\n           minlength="6"\n           required>\n      <div ng-messages="authForm.password.$error">\n        <div ng-message="required">This field is required</div>\n        <div ng-message="minlength">This filed should be at least 6 characters long</div>\n      </div>\n  </md-input-container>\n\n  <md-button class="md-raised" type="submit" ng-disabled="authForm.$invalid">\n      {{ $ctrl.button }}\n  </md-button>\n\n  <div ng-if="$ctrl.message">\n    {{ $ctrl.message }}\n  </div>\n\n</form>\n');
$templateCache.put('./contact.html','\n<a href=""\n   class="contact-card__link"\n   ng-click="$ctrl.selectContact();">\n\n   <md-button class="md-fab" md-colors="{color: \'primary-900-0.5\'}">\n     <md-icon>person</md-icon>\n   </md-button>\n\n</a>\n');
$templateCache.put('./contacts.html','<md-grid-list class="grid-contacts"\n    md-cols="1" md-cols-sm="2" md-cols-md="3" md-cols-gt-md="5"\n    md-row-height-gt-md="1:1" md-row-height="4:3"\n    md-gutter="8px" md-gutter-gt-sm="4px" >\n\n    <md-grid-tile ng-repeat="contact in $ctrl.contacts"\n                  class="wrapper-tile-{{ $index }}"\n                  md-rowspan="1"\n                  md-rowspan-xs="2"\n                  md-colspan="1"\n                  md-colspan-sm="1"\n                  md-colspan-xs="2" >\n\n\n        <img ng-init="$ctrl.getAvatar($index);"  alt="">\n        <contact\n          contact="contact"\n          on-select="$ctrl.goToContact($event)">\n        </contact>\n\n      <md-grid-tile-footer md-colors="{background: \'primary\'}">\n        <h3 class="md-display-1">{{ contact.name }}</h3>\n      </md-grid-tile-footer>\n    </md-grid-tile>\n\n</md-grid-list>\n\n<div class="contacts__empty"\n  ng-if="!$ctrl.contacts.length">\n  <i class="material-icons">face</i>\n  There\'s no one here...\n</div>\n');
$templateCache.put('./contact-edit.html','<div  layout="row"\n      layout-align="center center"\n      layout-padding layout-margin layout-fill>\n\n    <div flex="100" flex-gt-xs="70" flex-gt-sm="50" flex-gt-md="30">\n      \n    <md-toolbar class="md-theme-indigo">\n      <h1 class="md-toolbar-tools md-display-3">Edit Contact</h1>\n    </md-toolbar>\n\n    <contact-detail\n      contact="$ctrl.contact"\n      on-delete="$ctrl.deleteContact($event);"\n      on-update="$ctrl.updateContact($event);">\n    </contact-detail>\n  </div>\n\n</div>\n');
$templateCache.put('./contact-detail.html','\n\n  <form name="contactDetailForm" novalidate>\n\n      <md-input-container class="md-block">\n        <!-- Use floating placeholder instead of label -->\n        <md-icon md-colors="{color: \'primary-900-0.5\'}">people</md-icon>\n        <label>Name</label>\n        <input ng-model="$ctrl.contact.name"\n              type="text"\n              name=\'name\'\n              required="required">\n          <div ng-messages="contactDetailForm.name.$error">\n            <div ng-message="required">This field is required</div>\n            <div ng-message="email">This filed should be a valid email</div>\n          </div>\n      </md-input-container>\n\n      <md-input-container class="md-block">\n        <!-- Use floating placeholder instead of label -->\n        <md-icon md-colors="{color: \'primary-900-0.5\'}">people</md-icon>\n        <label>Surname</label>\n        <input ng-model="$ctrl.contact.surname"\n              type="text"\n              name=\'surname\'>\n          <div ng-messages="contactDetailForm.surname.$error">\n          </div>\n      </md-input-container>\n\n      <md-input-container class="md-block">\n        <!-- Use floating placeholder instead of label -->\n        <md-icon md-colors="{color: \'primary-900-0.5\'}">email</md-icon>\n        <label>Email</label>\n        <input ng-model="$ctrl.contact.email"\n              type="email"\n              name=\'email\'\n              required="required">\n          <div ng-messages="contactDetailForm.email.$error">\n            <div ng-message="required">This field is required</div>\n            <div ng-message="email">This filed should be a valid email</div>\n          </div>\n      </md-input-container>\n\n      <md-input-container class="md-block" flex-gt-sm>\n        <md-icon md-colors="{color: \'primary-900-0.5\'}">world</md-icon>\n        <label>Country</label>\n        <md-select ng-model="$ctrl.contact.country">\n          <md-option ng-repeat="country in $ctrl.countries" value="{{ country.code }}">\n            {{ country.name }}\n          </md-option>\n        </md-select>\n      </md-input-container>\n\n      <md-button class="md-raised"\n                  type="submit"\n                  ng-if="$ctrl.isNewContact"\n                  ng-click="$ctrl.saveContact();"\n                  ng-disabled="contactDetailForm.$invalid">\n         SAVE</md-button>\n\n      <md-button class="md-raised"\n                  md-colors="{ color: \'accent-900-0.5\'}"\n                  ng-if="!$ctrl.isNewContact"\n                  ng-click="$ctrl.deleteContact();" >\n          DELETE\n      </md-button>\n\n      <md-button class="md-raised"\n                  ng-if="!$ctrl.isNewContact"\n                  md-colors="{color: \'primary-900-0.5\'}"\n                  ng-click="$ctrl.updateContact($event);" >\n          UPDATE\n      </md-button>\n\n  </form>\n</div>\n');
$templateCache.put('./contact-new.html','<div  layout="row"\n      layout-align="center center"\n      layout-padding layout-margin layout-fill>\n\n    <div flex="100" flex-gt-xs="70" flex-gt-sm="50" flex-gt-md="30">\n      <md-toolbar class="md-theme-indigo">\n        <h1 class="md-toolbar-tools md-display-3">New Contact</h1>\n      </md-toolbar>\n\n      <contact-detail\n        contact="$ctrl.contact"\n        on-save="$ctrl.createNewContact($event);">\n      </contact-detail>\n    </div>\n\n</div>\n');}]);