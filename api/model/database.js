const Sequelize = require('sequelize');

const database = new Sequelize(
    'account',
    'root',
    'ok0915',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

module.exports = database;