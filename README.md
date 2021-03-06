![dev-workflow-api](https://github.com/kasdihacene/paris-taxi-fare-kata/workflows/dev-workflow-api/badge.svg)
[![codecov](https://codecov.io/gh/kasdihacene/paris-taxi-fare-kata/branch/master/graph/badge.svg)](https://codecov.io/gh/kasdihacene/paris-taxi-fare-kata)

### :construction_worker: About Paris Taxi Fare
A prototype application that calculates the price of a ride/journey for the Paris Taxi Company fleet.

:white_check_mark: [FrontEnd Link](https://github.com/kasdihacene/taxis-ui)

:white_check_mark: [BackEnd Link](https://github.com/kasdihacene/paris-taxi-fare-kata)

> Response API

    interface Ride {
        id: number;
        distance: number;
        startTime: string; // ISO date
        duration: number; // Duration in SECONDS
    }

### :construction_worker: What was it built with? 

:large_blue_diamond: **TECH STACK**

>       FRONTEND

        - create-react-app
        - ReactJS
        - react-bootstrap
        - ReactJS Hooks

>       BACKEND

        - TDD OutsideIn Approach using java 11
        - Spring Boot
        - maven
        - CI with GitHub Actions


### Some prototypes

        - When a ride is longer than 2 miles, give it a red background.
        - For each ride, query and then display its price within the “Ride” component

![](markdown/capt1.PNG)

        - On click, the ride component should display an html alert with the ride duration, in
        the hh:mm:ss format as well as the end time of the ride. 
        - After being click, the Ride component should have the word Clicked beside the ride ID.

![](markdown/capt2.PNG)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
