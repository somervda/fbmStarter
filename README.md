# FbmStarter

This project aims to provide a starting point for angular applications. Intent is for designer of a new application to take a copy of this project, perform a set of standard replace operations to rename the project to the required new name and then start adding application specific code. The fbmStarter application provides the following capabilities that can be extended by the application designer.

**fbmStarter Capabilities**

- Angular 7+ (Version updated as new major releases of Angular occurs)
- Firebase - fbmStarter includes firestore, authentication, hosting, firestore rules and firebase functions
- Material Design - implements material design interface using @angular/material library. Custom material theme included to use as an example of extending base material design themes (Using SCSS and angular CDK features)
- Authentication - Set up to use firebase authentication and firebaseui library to provide the authentication UI elements. Authentication is enterprise oriented, examples are provided of using google, email and microsoft as authentication providers. The microsoft provider should allow enterprises to use office365 accounts (as long as account access is allowed.) Some basic authorization capabilities are included (administrator role and functions)
- Home page with carousel - Example of a home splash page as a launching point for new users. Uses bootstrap carousel component and material cards in a fairly typical home page layout (main features as images and detail cards)
- PWA - Progressive web application, includes a service worker, desktop images, starter page etc that is required for a well behaved PWA. Caching defined for application and data to support offline operation.
- E2E test suite - Cypress test suite included to test fbmStarter capabilities and can be extended for applications based on fbmStarter.
- Built/tested/optimized - Base fbmStarter capabilities are built in, tested, and optimized to ensure new applications start at a consistent and well architected starting point.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

**Creating a new new project based on fbmStarter**

A new project can be created based on the fbmStarter code. To do this will require a new firebase instance (See instructions below "Create Initial Firebase Project"). Note: these instructions do not include detailed instructions for firebase administration or how to manage your new project in github (You are on your own for that).

Create copy from the github template

- Go to https://github.com/somervda/fbmStarter/generate and create a new github project based on the fbmStarter project.
- Get a copy of the clone link from the new project and use this in VsCode to create a local copy of your project.

Or create copy as new local project

- Create a new folder for the new project. Name the folder after the new project name. This folder is the "New Project folder"
- Get a zip copy of the fbmStarter code from github https://github.com/somervda/fbmStarter/archive/master.zip
- Open the zip file and copy the content of the top level fbmStarter-master folder in the zip to the new project folder.
- Using VSCode open the new project folder.
- When initially opened a git repository will not be set up. In VSCode click on the "Source Control" icon on the left side. This will open with a message that "No source control providers are registered". Click on the "Initialize Repository" icon to create a new git repository (Normally select the first/default option for the location of this repository).

Update project name in the local copy

1. Perform a File->Replace in Files in VSCode. Replace "fbmStarter" to "[New Project Name]" and "fbm-starter" to "[New Project Name without capitals format]" e.g. in the case of creating a new project called ourDars , fbmStarter->ourDars , fbm-starter->our-dars .
2. In the VSCode terminal type "npm i" to install the node libraries defined in package.json (may take a while)
3. Perform a "ng build --prod" to check no errors exist

**Application specific changes**

The previous instructions will set up aa direct copy of the fbmStarter code with your new project name, application specific changes will still be needed before adding your own code.

1. Use your own firebase project information(Please don't use the fbmStarter defaults, I will be periodically refreshing this firebase project to make sure it stays fresh. ). The firebase config information is stored in the src/environments folder files (environment.prod.ts and environment.ts).
2. Set the default firebase project to be used "firebase use [project-id]", check the firebase project in use using "firebase list"
3. In the VSCode terminal - cd to the functions folder. Perform a "npm i", then a "npm run deploy"
4. Start the application "ng serve" and perform an eMail based login. After the first user is created go to your firebase console, go to firestore and the first user , just created, should be present. Add the following fields to that user - isAdmin, boolean, true and isActivated, boolean , true. These two attributes will set up this first user as a valid administrator.
5. Change the PWA graphic set in src/assets/icons folder. These need to be sized to match the file name definitions i.e. "icon-48x48.png". Use https://app-manifest.firebaseapp.com/ to make this easier.

**Create initial firebase Project**

1. Go to https://console.firebase.google.com/ and create a new firestore project.
2. When asked to register an app select the web option , enter a name and also select "Set up Hosting". Exit the startup wizard at this point.
3. The client config information can be found under project settings -> your app -> firebase SDK settings (config option). Use the config setting in the environment files in your new angular project.
4. Make sure a "Support eMail" is defined for the project. (Also defined in the project settings page). Google authentication provider will fail if this is not set up.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
