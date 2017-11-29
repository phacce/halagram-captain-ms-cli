module.exports = () => {

return `/**
 * This is an example Schema for a mongoose Model
 */

const mongoose = require('mongoose');

/**
 * Export the schema for use in a Model
 */
module.exports = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requied: true,
        unique: true
    }
});`;

};