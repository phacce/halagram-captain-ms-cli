# Captain-ms CLI
[![NPM Version](https://img.shields.io/npm/v/@halagram/captain-ms-cli.svg?style=flat)](https://www.npmjs.org/package/commander)
[![NPM Downloads](https://img.shields.io/npm/dm/@halagram/captain-ms-cli.svg?style=flat)](https://www.npmjs.org/package/commander)

This is a Command Line Interface app for the [captain-ms](https://www.npmjs.com/package/@halagram/captain-ms) NPM module. It is used to create a Service template.

## Installation
This module should be installed globally using the command below
```
npm install -g @halagram/captain-ms-cli
```

## Command for creating a Service
```
$ captain-ms-cli users_service [options]
```
This creates a service with name 'users_service'. you can specify optional parameters to configure the Service. Ex
```
$ captain-ms-cli users_service --port 3000 --M User
```
This creates a users service and then sets the default listen port to 3000 and the database model is User

A full list of options is given below:
```
-P 3000 or --port 3000 => this sets the default listen port to 3000

-L AppTag or --logger AppTag => this sets the logger tag to AppTag

-D users or --database users => this configures the service to use the 'users' database

-M User or --model User => this sets the model name

-F no or --folder no => this tells the app not to create the service in its own separate directory
```