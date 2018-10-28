const Sequelize = require('sequelize');

const database = new Sequelize(
    'account',
    'root',
    'wlsdm1103',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

module.exports = database;