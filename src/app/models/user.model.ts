export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  // Date and time the user first logged into the application (used for aging)
  dateCreated?: Date;

  // Simple Authorization scheme
  isAdmin?: Boolean;
  // Indicates the user has administration rights including ability to
  // set a users roles
  isActivated?: Boolean;
  // Indicates the user can use the application , by default
  // a user is inactive until an administrator activates them
}
