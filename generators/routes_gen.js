module.exports = () => {

return `/**
 * This file is an example of a Route file.
 */

const router = require('express').Router();
const repo = require('../index').repository;
const exampleController = require('../controllers/example_controller');

/**
 * Get a list of names
 */
router.get('/captains', exampleController(repo).getCaptains);

/**
 * Export the Router for use in the Service class
 */
module.exports = router;`;

};