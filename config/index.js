require('dotenv/config');
var db = require('./database');

const dbUri = process.env.DB_CONNECTION;

module.exports.init = function () {
    console.log('Database Configuration Initialized')
    db(dbUri);
};
