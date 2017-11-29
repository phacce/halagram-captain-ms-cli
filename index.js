const program = require('commander');
const fs = require('fs');

var dir = '';
var serviceObj = {};

program.arguments('<service>',)
    .option('-p, --port <port>', 'the service port')
    .option('-l, --logger <logger>', 'the logger tag')
    .option('-d, --database <database>', 'the name of the database')
    .option('-m, --model <model>', 'the model name')
    .option('-f, --folder <folder>', 'yes to create the service in a folder, else no')
    .action((service) => {
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
    serviceObj.database = program.database || `${model}-db`;
}

function createFolder(path){
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}

function createServiceIndexFile() {
    let template = require('./generators/index_gen')(serviceObj);
    fs.writeFile(`${dir}index.js`, template, (err) => {
        if (err) console.log(`... an error occured while creating service ...`);
        else console.log(`... service created ...`);
    });
}

function createControllersFolder() {
    createFolder(`${dir}controllers`);
    let template = require('./generators/controllers_gen')();
    fs.writeFile(`${dir}controllers/example_controller.js`, template, (err) => {
        if (err) console.log(`... an error occured while creating controllers ...`);
        else console.log(`... controllers created ...`);
    });
}

function createRoutesFolder() {
    createFolder(`${dir}routes`);
    let template = require('./generators/routes_gen')();
    fs.writeFile(`${dir}routes/example_route.js`, template, (err) => {
        if (err) console.log(`... an error occured while creating routes ...`);
        else console.log(`... routes created ...`);
    });
}

function createSchemasFolder() {
    createFolder(`${dir}schemas`);
    let template = require('./generators/schemas_gen')();
    fs.writeFile(`${dir}schemas/example_schema.js`, template, (err) => {
        if (err) console.log(`... an error occured while creating schemas ...`);
        else console.log(`... schemas created ...`);
    });
}