import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    password: {
        type: Sequelize.TEXT
    },
    fullname: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
<<<<<<< HEAD
    profileid: {
=======
    profileId: {
>>>>>>> 1316f13d4a5331f7a677eba6b533ae998dc6283c
        type: Sequelize.INTEGER
    },
    active: {
        type: Sequelize.BOOLEAN
    },
    updateddate: {
        type: Sequelize.DATE
    },
    createddate: {
        type: Sequelize.DATE
    },
}, {
    timestamps: false
});

export default User;