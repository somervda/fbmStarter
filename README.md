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

**Creating a new new project based on fmmStarter**

A new project can be created based on the fbmStarter code. To do this will require a new firebase instance.
1. Create a new folder for the new project. Name the folder after the new project name. This folder is the "New Project folder"
2. Get a zip copy of the fbmStarter code from github https://github.com/somervda/fbmStarter/archive/master.zip
3. Open the zip file and copy the content of the top level fbmStarter-master folder in the zip to the new project folder.
4. Using VSCode open the new project folder.
5. When initially opened a git repository will not be set up. In VSCode click on the "Source Control" icon on the left side. This will open with a message that "No source control providers are registered". Click on the "Initialize Repository" icon to create a new git repository (Normally select the first/default option for the location of this repository). 
6. Perform a File->Replace in Files in VSCode. Replace "fbmStarter" to "[New Project Name]" and "fbm-starter" to "[New Project Name without capitals format]" e.g. in the case of creating a new project called ourDars , fbmStarter->ourDars , fbm-starter->our-dars .
7. In the VSCode terminal type "npm i" to install the node libraries defined in package.json (may take a while)
8. Perform a "ng build --prod" to check no errors exist

**Application specific changes**
The previous instructions will set up aa direct copy of the fbmStarter code with your new project name, apllication specific changes will still be needed before adding your own code.
1. Use your own firebase project information(Please don't use the fbmStarter defaults, I will be periodically refreshing this firebase project to make sure it stays fresh. ). The firebase config information is stored in the environment folder files.
2. Change the PWA graphic set in 




## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
