
import { Sequelize } from 'sequelize';
import config from '../../config/database';
console.log(config);
console.log(config.development.username )
console.log( config.development.database)
console.log(config.development.password)
let sequelizeInstance = null;


export function createConnection() {
  const sequelize = new Sequelize(
    config.development.database ?? '',
    config.development.username ?? '',
    config.development.password ?? '',
    {
      dialect: 'mysql',
      // otras opciones de configuración si es necesario
    });

  sequelize
  .authenticate()
    .then(() => {
      console.log('Conexión exitosa a la base de datos');
    })
    .catch((error: any) => {
      console.error('Error al conectar a la base de datos:', error);
    });

  return sequelize;
}

