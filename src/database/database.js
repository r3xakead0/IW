import Sequelize from 'sequelize';

// export const sequelize = new Sequelize(
//     'ironwarriors',
//     'postgres',
//     'postgres',
//     {
//         host: 'localhost',
//         dialect: 'postgres', 
//         pool: {
//             max: 5,
//             min: 0,
//             require: 30000,
//             idle: 10000
//         },
//         logging: false
//     }
// );

export const sequelize = new Sequelize('postgres://nkyqulrzrkxydx:b7bd0d946cc80a54a249136b54073ef57807fef3bf19c9c66e3c89b144d5b4bf@ec2-107-20-198-176.compute-1.amazonaws.com:5432/d5m1f2pn36jfst?ssl=true');