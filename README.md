# Captain-ms CLI

This is a Command Line Interface project for the [captain-ms](https://www.npmjs.com/package/@halagram/captain-ms) NPM module. It is used to create Service templates.

Installation
```
npm i -D @halagram/captain-ms-cli
```

## Command for creating a Service
```
$ node captain-ms-cli users-service [options]
```
This creates a service with name 'users-service'. you can specify optional parameters to configure the Service. Ex
```
$ node captain-ms-cli users-service --port 3000 --model User
```
This creates a users service and then sets the default listen port to 3000 and the database model is User

A full list of options is given below:
```
-p 3000 or --port 3000 => this sets the default listen port to 3000

-l AppTag or --logger AppTag => this sets the logger tag to AppTag

-d users or --database users => this configures the service to use the 'users' database

-m User or --model User => this sets the model name

-f no or --folder no => this tells the app not to create the service in its own separate directory
```