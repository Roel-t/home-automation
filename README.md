# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). To simulate running a server and updating the temperature, lights, and curtains I have used json-server package. Which allows us to mock up some REST API functionalities. It will need to be ran simultaniously with the react app. Inspiration for the app design was a combination of the hue desktop app(https://apps.microsoft.com/store/detail/huetro-for-hue/9WZDNCRFJJ3T?hl=en-us&gl=us) and dribble home automation designs (https://dribbble.com/shots/8899139-Smart-Home).

![alt text](https://github.com/Roel-t/home-automation/blob/main/homeScreenShot.png?raw=true)

## Available Scripts

In the project directory, you can run:

### How to run API server

The boilerplate includes a small service for data fetching. The file `db.json` includes all the necessary data to achieve the goal. Please follow the steps below to start the server:

```
npm install
npm run server
```

Check [json-server](https://github.com/typicode/json-server) for more information.

### How to run React server


```
npm install
npm start
```


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
