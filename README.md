## About

The main assumption of this project is to allow a user to create a character from available body parts, then put name, write short description and save it as a new project into database.<br/>
Logging system fully works with a connection to firebase. <br/><br/>
Page is available under this url: https://hero-project-klauza.firebaseapp.com/ <br/>
Inspired by https://www.thenetninja.co.uk/

<br/>

<img src="https://user-images.githubusercontent.com/43997053/115122194-95b93180-9fae-11eb-8b68-dd1d6cb9eaaf.PNG" width="500">

<br/>

## Scripts

### `npm start` & `gulp watch`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

To deploy to firebase, follow the instructions in "firebase set up hosting";<br/> Files from 'npm run build' command paste into dist folder & then run ``firebase deploy``

