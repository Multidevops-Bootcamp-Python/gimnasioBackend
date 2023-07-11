
const dotenv = require('dotenv');
dotenv.config();//configura variales de entorno
module.exports = {
  development: {
    username: process.env.DB_USERNAME !== '' ? process.env.DB_USERNAME : 'root',
    password: process.env.DB_PASSWORD !== '' ? process.env.DB_PASSWORD : '1234',
    database: process.env.DB_DATABASE !== '' ? process.env.DB_DATABASE : 'agendador1',
    host: process.env.DB_HOST !== '' ? process.env.DB_HOST : 'localhost',
    port: process.env.DB_PORT !== '' ? process.env.DB_PORT : 3306,
    dialect: 'mysql',
    seederStorage: 'sequelize',
    seederStorageTableName: 'seeds',
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'migrations',
    define: {
      timestamps: false,
      underscored: true
    },
    dialectOptions: {
      bigNumberStrings: true
    },
    // Agregar la propiedad "indexes" para permitir la creación de índices
    indexes: [
      // Ejemplo de índice en la columna "email" de la tabla "users"
      {
        unique: true,
        fields: ['email']
      },
      // Puedes agregar más índices aquí
    ]
  },
  test: {
    username: process.env.CI_DB_USERNAME || '',
    password: process.env.CI_DB_PASSWORD || '',
    database: process.env.CI_DB_NAME || '',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  }
  // production: { ... }
};
