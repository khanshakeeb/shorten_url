# Shorten URL application
This project is demo project for shorten long URLs. This repository contains two folders are follows:
1. Client : It contains ReactJS App which consume APIs.
2. Server: It contains ExpressJS application for APIs

## System requirements
Any operating system which supports NodeJS runtime and MongoDB
1. Node = v14.16.1
2. Npm = 6.14.12
3. Yarn = 1.10.1
4. MongoDB = 4.4.5

## Installation for Server node modules
`$ npm i`

## Installation for Client modules
`$ yarn` or `$ npm i` but I used `yarn` command which is a more better and faster than `npm i`

## Run Server in development mode
1. `$ cd server` to change directory to server folder.
2. `$ npm run watch` after changing directory server run this command which start application in dev mode.

## Run Server in production mode
1. `$ cd server` to change directory to client folder.
2. `$ npm start` after changing directory server run this command which start application in prod mode.

## Run Client in development mode
1. `$ cd client` to change directory to client folder.
2. `$ npm start` after changing directory client run this command which start application in dev mode.

## Run Client in production mode
You need to run a build process in order to in run React App in production mode.
1. `$ npm run build`
2. `$ npm i -g serve`
3. `$ serve -s build`

Server will run build in something similar `URL: http://localhost:5000/`. For my case `PORT=5000` but it depends on your system available port.

It will run a static server which serves React App.

## To run applications quickly then run in dev mode.
1. `$ npm run watch` To run server in dev 
2. `$ npm start` To run client in dev

## Troubleshoot
1. Make sure MongoDB server is in running state.
2. Server default PORT= 3001; make sure port is available in your system
3. Client default PORT = 3000; make sure port is available in your system.



