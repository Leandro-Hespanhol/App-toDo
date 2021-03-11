const server = require('./config/server');
require('./config/database');
require('./config/routes')(server);

//noderestfull - https://www.npmjs.com/package/node-restful
