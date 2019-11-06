import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import moment from "moment";

const Plan = sequelize.define('plans', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    athleteid: {
        type: Sequelize.INTEGER
    },
    plandate: {
        type: Sequelize.DATE
    },
    day: {
        type: Sequelize.VIRTUAL,
        get: function () {
            return moment(this.get('plandate')).locale('es').format('dddd');
        }
    },
    sport: {
        type: Sequelize.STRING(50)
    },
    minutes: {
        type: Sequelize.INTEGER
    },
    meters: {
        type: Sequelize.INTEGER
    },
    jobs: {
        type: Sequelize.TEXT
    },
    type: {
        type: Sequelize.STRING(20)
    },
    completed: {
        type: Sequelize.BOOLEAN
    },
    createddate: {
        type: Sequelize.DATE
    },
    updateddate: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

export default Plan;