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
    profileId: {
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