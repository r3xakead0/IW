import Sequelize from "sequelize";
import { sequelize } from "../database/database";

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
    fullname: {
        type: Sequelize.TEXT
    },
    birthdate: {
        type: Sequelize.DATEONLY
    },
    phonenumber: {
        type: Sequelize.STRING(20)
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
        type: Sequelize.DECIMAL(5,2)
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

export default Athlete;