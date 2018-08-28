// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDAq_xj3D5YXIFRbBVjSDw3Gaz6005wwKc',
    authDomain: 'timer-e4fc2.firebaseapp.com',
    databaseURL: 'https://timer-e4fc2.firebaseio.com',
    projectId: 'timer-e4fc2',
    storageBucket: 'timer-e4fc2.appspot.com',
    messagingSenderId: '553596563444'
  },
  appversion: '27.08.2018'
};
