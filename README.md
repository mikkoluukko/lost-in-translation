# Lost in Translation

## Table of contents
  - [About](#about)
  - [Pages](#pages)
    - [Login page](#login-page)
    - [Translation page](#translation-page)
    - [Profile page](#profile-page)
  - [Getting Started with Create React App](#getting-started-with-create-react-app)
    - [Available Scripts](#available-scripts)
    - [npm start](#npm-start)
    - [npm test](#npm-test)
    - [npm run build](#npm-run-build)
    - [npm run ejec](#npm-run-eject)

## About

Lost in Translation is a web application made with React. Main feature of the 
application is to translate words and sentences of up to 40 characters long to
American sign language. The application has three main views: Login page, 
Translation page and Profile page.

The app uses [React](https://reactjs.org/), 
[React Router](https://reactrouter.com/) and 
[React-Bootstrap](https://react-bootstrap.github.io/).


## Pages

### Login page

Login page is the first thing that the user will see. The page includes an 
input field where users must add their username. App will store it to the 
local storage. After the valid username is added and the Login button clicked, 
the user will be redirected to translation view.

### Translation page

On the translation page user can type a word or short sentence to the input 
field. Only letters from a to z and whitespace characters are allowed in the 
input. When the Translate button is clicked, the input will be validated and if
it is valid, then any possible leading and trailing whitespace are trimmed out 
from the input, the input field will be cleared and the translation will appear 
in the area under the button. In the top part of the screen there is also
a button that takes the user to their profile page.

![image of the translation page](https://github.com/mikkoluukko/lost-in-translation/blob/master/readme-images/translation-page.png)

### Profile page

On the Profile view the users can see their translation history. History 
includes max 10 latest inputted translations. On the profile view user can 
logout and clear the translation history or return to translation page. On
logout user's name and their  history will be removed and the user will be 
redirected to the login page. 

![image of the profile page](https://github.com/mikkoluukko/lost-in-translation/blob/master/readme-images/profile-page.png)


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
