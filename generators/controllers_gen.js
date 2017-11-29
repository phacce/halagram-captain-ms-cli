module.exports = () => {

return `/**
* This file contains a controller
*/

module.exports = (repository) => {

    return {

        getNames: (req, res, next) => {
            /**
             * Use the repository here to get items from your data source
             */

            res.json([
                { name: 'Captain Nimitz' },
                { name: 'Captain Chandler' }
            ]);
        }
    };
};`;

};