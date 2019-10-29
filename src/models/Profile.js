import Sequelize from "sequelize";
import { sequelize } from "../database/database";

<<<<<<< HEAD
import User from "./User";

=======
>>>>>>> 1316f13d4a5331f7a677eba6b533ae998dc6283c
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

<<<<<<< HEAD
Profile.hasMany(User, { foreignKey: 'profileid', sourceKey: 'id' });
User.belongsTo(Profile, { foreignKey: 'profileid', sourceKey: 'id' });

=======
>>>>>>> 1316f13d4a5331f7a677eba6b533ae998dc6283c
export default Profile;