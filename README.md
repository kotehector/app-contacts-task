# Contacts Manager App

## Instructions
1. Download or clone repository
2. In root folder `npm install`
2. In root folder `bower install`
3. Local Server: `npm run dev`
4. Deploy Hosting: `npm run deploy` (need have firebase-tools installed)
5. Url Hosting: https://contacts-manager-be7e6.firebaseapp.com/
6. Data Login:
    Email: test@hector.com
    Pass: 111111

## What technologies do I use?
- AngularJs
- AngularMaterial
- Angular UiRouter
- Firebase Backend (BBDD, Hosting)
- MaterialIcons
- Gulp
- LittleServer
- Bower
- NPM
- Faker.js
- Git
- ...

## Architecture Project
- Root (Root component)
  - Common (Root component)
    - App (Route component)
    - AppNav (Stateless component)
  - Components (Root)
    - Auth (Route)
      - Login (Stateful)
      - Register (Stateful)
      - Auth-form (Stateless)
    - Contact (Route)
      - Contacts (Stateful)
      - Contact-new (Stateful)
      - Contact-edit (Stateful)
      - Contact-detail (Stateless)
      - Contact (Stateless)

## Gulp Tasks inside gulpfile.js
- `gulp annotate` - Inject AngularJs dependencies
- `gulp templates` - Cache for angular html templates
- `gulp wrap` - Wrap .js with IIFE
- `gulp build-css` - Compile Sass files
- `gulp jshint` - Alert from errors in js files
- `gulp watch` - Watch files on air tu update browser (not used, used little-server instead)
