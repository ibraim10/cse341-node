// eslint-disable-next-line import/no-extraneous-dependencies
const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Is an API of my contacts',
    },
    host: 'cse341-node-wk0g.onrender.com',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);

// o build the documentation before the project starts and
// immediately start it
// swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
//     // eslint-disable-next-line global-require
//     require('./app'); // Your project's root file
// });
