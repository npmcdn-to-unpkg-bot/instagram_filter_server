/**
 * index.js
 */

const argv = require('minimist')(process.argv.slice(2));
const server = require('./server/server');
server.init();
