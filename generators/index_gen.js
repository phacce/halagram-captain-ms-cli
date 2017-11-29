module.exports = (serviceObj) => {

return `/**
 * This file contains the basic setup of a Service.
 */

const captain = require('@halagram/captain-ms');
const schema = require('./schemas/example_schema');

/**
 * Create an app logger
 */
let logger = new captain.Logger('${serviceObj.loggerTag}');

/**
 * Create a database for the service
 */
let db = new captain.MongoDatabase({
    database: '${serviceObj.database}'
}, logger);

/**
 * Create a new datasource; in this case, we use a Mongoose datasource
 */
let dataSource = new captain.MongooseDataSource('${serviceObj.model}', schema, db);

/**
 * Initialize your repository
 */
let repo = new captain.Repository(dataSource);

/**
 * Export the repository for use in other files before the service starts
 */
exports.repository = repo;

/**
 * Instantiate the service
 */
let service = new captain.Service({
    name: "${serviceObj.serviceName}",
    port: ${serviceObj.port}
}, logger);

/**
 * Set the Service routes. This is produces app.use('/key', value);.
 * You can set routes for this Service multiple times
 */
service.setRoutes({
    '': require('./routes/example_route')
});

/**
 * Start the Service.
 * NOTE: You can pass an optional callback with no arguments to the start() method
 */
service.start();`;

};