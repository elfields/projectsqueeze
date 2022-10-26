# projectsqueeze
# Squeeze

<img src='./src/assets/squeezelogo1.png' width='200' height ='200'>

Squeeze is a web app designed to provide tailored Podcast recommendations to the user, without them having to tediously search through endless options and be overwhelmed with choice.

The user can input what categories they are interested in and how much time they have available to listen, and Squeeze will provide a selection that matches these preferences.

## Table of Contents

- [projectsqueeze](#projectsqueeze)
- [Squeeze](#squeeze)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
    - [Requirements](#requirements)
    - [Dependencies](#dependencies)
    - [Accessing React Server](#accessing-react-server)
  - [Tests](#tests)
  - [API Reference](#api-reference)
  - [Credits](#credits)

## Technologies Used

- JavaScript ES6
- React 18.2.0
- CSS 3
- HTML 5
- Cypress
- Jest

## Installation

### Requirements

- To run this project, clone this repository and install it locally.
- Squeeze can be accesed through installing node.js and npm globally on your machine:

Download the LTS version of Node.js for your relevant platform using [Node.js](https://nodejs.org/en/download/).

Run npm install in your terminal.

```console
npm install
```

To enable the use of the API in this application, please refer to the .env.example file.
To obtain a working API key, please contact one of the contributors.

### Dependencies

When npm install is run in the terminal the following packages will be enabled to allow access to all of the app features.

React Slider:

```console
npm install react-slider
```

React Router DOM:

```console
npm install react-router-dom
```

React Swipeable:

```console
npm install react-swipeable
```

React Audio Player:

```console
npm install --save react-audio-player
```

### Accessing React Server

To start the React server, firstly navigate to the project directory.

e.g.:

```console
cd squeeze
```

Enter the following command into your terminal.

```console
npm start
```

Alternatively, type the following into your browser to navigate to the React App.

```console
localhost:3000
```

## Tests

To run the Unit Test Suite run the following command:

```console
npm test
```

To run the cypress E2E Test Suite you must have the enviroment variable REACT_APP_MOCK_DATA set to 'true' in the .env.local file.
You must also have the application server running in http://localhost:3000 to do this see the section 'Accessing React Server'.
Then run the following command:

```console
npm run test:e2e
```

Or if your computer supports it you can run cypress in the browser with the following command:

```console
npm run cy:open
```

## API Reference

[Listen Notes](https://www.listennotes.com/podcast-api/) Podcast API has been used to access the relevant Podcast data for Squeeze.

## Credits

This web app was created by Fullstack Flamingos as part of the Summer 2022 CFG Degree - Fullstack Specialisation.

List of contributors:

- Christine Robinson @ch0psi
- Emma Fields @elfields
- Emma Keeley @pinkkoala95
- Rachel McFarlane @rmmcf
- Rebecca Jewers @FuckinGandalfMan

