import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import User from "./User";

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

Profile.hasMany(User, { foreignKey: 'profileid', sourceKey: 'id' });
User.belongsTo(Profile, { foreignKey: 'profileid', sourceKey: 'id' });

export default Profile;