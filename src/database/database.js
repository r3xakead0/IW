import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
<<<<<<< HEAD
    'ironwarriors',
=======
    'postgres',
>>>>>>> 1316f13d4a5331f7a677eba6b533ae998dc6283c
    'postgres',
    'postgres',
    {
        host: 'localhost',
        dialect: 'postgres', 
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);