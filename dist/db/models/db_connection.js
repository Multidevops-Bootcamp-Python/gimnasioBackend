"use strict";
const Sequelize = require('sequelize');
const config = require('../../config/database');
let sequelizeInstance = null;
function createConnection() {
    const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
        dialect: 'mysql',
        // otras opciones de configuración si es necesario
    });
    sequelize
        .authenticate()
        .then(() => {
        console.log('Conexión exitosa a la base de datos');
    })
        .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });
    return sequelize;
}
module.exports = createConnection;
