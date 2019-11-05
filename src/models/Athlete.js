import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import moment from "moment";

import Evaluation from "./Evaluation";

const Athlete = sequelize.define('athletes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    firstname: {
        type: Sequelize.STRING(50)
    },
    lastname: {
        type: Sequelize.STRING(50)
    },
    birthdate: {
        type: Sequelize.DATEONLY
    },
    age: {
        type: Sequelize.VIRTUAL,
        get: function () {
            return moment().diff(moment(this.get('birthdate'), 'YYYY-MM-DD'), 'years')
        }
    },
    phonenumber: {
        type: Sequelize.STRING(20)
    },
    running: {
        type: Sequelize.BOOLEAN
    },
    cycling: {
        type: Sequelize.BOOLEAN
    },
    swimming: {
        type: Sequelize.BOOLEAN
    },
    conditioning: {
        type: Sequelize.BOOLEAN
    },
    strength: {
        type: Sequelize.BOOLEAN
    },
    otherobjectives: {
        type: Sequelize.TEXT
    },
    size: {
        type: Sequelize.INTEGER
    },
    weight: {
        type: Sequelize.INTEGER
    },
    bloodtype: {
        type: Sequelize.STRING(10)
    },
    fatpercentage: {
        type: Sequelize.DECIMAL(5, 2)
    },
    waistcircumference: {
        type: Sequelize.INTEGER
    },
    middlethighcircumference: {
        type: Sequelize.INTEGER
    },
    injuries: {
        type: Sequelize.TEXT
    },
    otheractivities: {
        type: Sequelize.TEXT
    },
    backgrounddescription: {
        type: Sequelize.TEXT
    },
    objectives: {
        type: Sequelize.TEXT
    },
    nutritiondescription: {
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

Athlete.hasMany(Evaluation, { foreignKey: 'athleteid', sourceKey: 'id' });
Evaluation.belongsTo(Athlete, { foreignKey: 'athleteid', sourceKey: 'id' });

export default Athlete;