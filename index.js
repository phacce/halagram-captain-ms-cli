#!/usr/bin/env node
const program = require('commander');
const fs = require('fs');

var dir = ''; // the directory to save the service
var serviceObj = {};

program.arguments('<service>')
    .version('0.2.0')
    .option('-P, --port <port>', 'set the service port')
    .option('-L, --logger <logger>', 'set the logger tag')
    .option('-D, --database <database>', 'set the name of the database')
    .option('-M, --model <model>', 'set the model name')
    .option('-F, --folder <folder>', 'yes to create the service in a folder, else no', /(yes|no)/i)
    .action((service) => {

        if (!service.match(/service$/i))
            service = `${service}_service`;

        initVariables(service);
        
        if (program.folder != 'no') {
            createFolder(service);
            dir = `${service}/`;
        }

        createServiceIndexFile();
        createControllersFolder();
        createRoutesFolder();
        createSchemasFolder();
    })
    .parse(process.argv);


function initVariables(service) {
    serviceObj.serviceName = service;
    serviceObj.port = program.port || 3000;
    serviceObj.loggerTag = program.logger || `${service}Tag`;
    serviceObj.model = program.model || 'User';
    serviceObj.database = program.database || `${serviceObj.model}-db`;
}

/**
 * Creates a folder in the specified path
 * @param {String} path the folder path
 */
function createFolder(path){
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}

/**
 * Creates the index.js file for the service
 */
function createServiceIndexFile() {
    let template = require('./generators/index_gen')(serviceObj);
    fs.writeFile(`${dir}index.js`, template, (err) => {
        if (err) console.log(`... an error occured while creating service ...`);
        else console.log(`... service created ...`);
    });
}

/**
 * Creates a controllers folder and an example controller file
 */
function createControllersFolder() {
    createFolder(`${dir}controllers`);
    let template = require('./generators/controllers_gen')();
    fs.writeFile(`${dir}controllers/example_controller.js`, template, (err) => {
        if (err) console.log(`... an error occured while creating controllers ...`);
        else console.log(`... controllers created ...`);
    });
}

/**
 * Creates a routes folder and an example route file
 */
function createRoutesFolder() {
    createFolder(`${dir}routes`);
    let template = require('./generators/routes_gen')();
    fs.writeFile(`${dir}routes/example_routes.js`, template, (err) => {
        if (err) console.log(`... an error occured while creating routes ...`);
        else console.log(`... routes created ...`);
    });
}

/**
 * Creates a schemas folder and an example schema file
 */
function createSchemasFolder() {
    createFolder(`${dir}schemas`);
    let template = require('./generators/schemas_gen')();
    fs.writeFile(`${dir}schemas/example_schema.js`, template, (err) => {
        if (err) console.log(`... an error occured while creating schemas ...`);
        else console.log(`... schemas created ...`);
    });
}

if (serviceObj.serviceName == undefined) console.error("\x1b[31m%s\x1b[0m", 'Please type the name of Service to create with any other optional arguments')