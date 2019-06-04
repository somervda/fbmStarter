# FbmStarter

This project aims to provide a starting point for angular applications. Intent is for designer of a new application to take a copy of this project, perform a set of standard replace operations to rename the project to the required new name and then start adding application specific code. The fbmStarter application provides the following capabilities that can be extended by the application designer.

**fbmStarter Capabilities**
* Angular 7+ (Version updated as new major releases of Angular occurs)
* Firebase - fbmStarter includes firestore, authentication,  hosting, firestore rules and firebase functions
* Material Design - implements material design interface using @angular/material library
* Authentication - Set up to use firebase authentication and firebaseui library to provide the authentication UI elements. Authentication is enterprise oriented, examples are provided of using google, email and microsoft as authentication providers. The microsoft provider should allow enterprises to use office365 accounts (as long as account access is allowed.) Some basic authorization capabilities are included (administrator role and functions)
* Home splash page with carousel - Example of a home page as a launching point for new users. Uses bootstrap carousel component and material cards in a fairly typical home page layout (main features as images and detail cards)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
