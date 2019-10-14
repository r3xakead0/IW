import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Profile = sequelize.define('profiles', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
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

export default Profile;