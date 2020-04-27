# Travel Planner app

This app implements a simple travel planner which takes as input a travel destination and a start and end date. It returns the trip duration and expected weather.

Run the app with 

    npm run build-prod
    npm run start

## Standing Out

This project implements calculating the trip duration as a way of standing out.

## APIs

The implemented server proxies several 3rd party APIs through 2 APIs:

### /weather

Request weather for destination at date.
Request: { dest: <destination>, date: <ISO date string> }
Response: { weather: { high: <high temperature>, low: <low temperature>, desc: <weather description> }}

### /image

Request image URL for destination.
Request: { dest: <destination> }
Response: { img: <image URL> }

## tests

run the tests with:

    npm run test