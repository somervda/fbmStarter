# FbmStarter

This project aims to provide a starting point for angular applications. Intent is for designer of a new application to take a copy of this project, perform a set of standard replace operations to rename the project to the required new name and then start adding application specific code. The fbmStarter application provides the following capabilities that can be extended by the application designer.

**fbmStarter Capabilities**
* Angular 7+ (Version updated as new major releases of Angular occurs)
* Firebase - fbmStarter includes firestore, authentication,  hosting, firestore rules and firebase functions
* Material Design - implements material design interface using @angular/material library. Custom material theme included to use as an example of extending base material design themes (Using SCSS and angular CDK features) 
* Authentication - Set up to use firebase authentication and firebaseui library to provide the authentication UI elements. Authentication is enterprise oriented, examples are provided of using google, email and microsoft as authentication providers. The microsoft provider should allow enterprises to use office365 accounts (as long as account access is allowed.) Some basic authorization capabilities are included (administrator role and functions)
* Home page with carousel - Example of a home splash page as a launching point for new users. Uses bootstrap carousel component and material cards in a fairly typical home page layout (main features as images and detail cards)
* PWA - Progressive web application, includes a service worker, desktop images, starter page etc that is required for a well behaved PWA. Caching defined for application and data to support offline operation.
* E2E test suite - Cypress test suite included to test fbmStarter capabilities and can be extended for applications based on fbmStarter.
* Built/tested/optimized - Base fbmStarter capabilities are built in, tested, and optimized to ensure new applications start at a consistent and well architected starting point.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
