import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Evaluation = sequelize.define('evaluations', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    athleteid: {
        type: Sequelize.INTEGER
    },
    ankles: {
        type: Sequelize.INTEGER
    },
    abductors: {
        type: Sequelize.INTEGER
    },
    hipflexors: {
        type: Sequelize.INTEGER
    },
    pectoral: {
        type: Sequelize.INTEGER
    },
    shoulder: {
        type: Sequelize.INTEGER
    },
    pyramidal: {
        type: Sequelize.INTEGER
    },
    hamstrings: {
        type: Sequelize.INTEGER
    },
    frontcoretest: {
        type: Sequelize.STRING(20)
    },
	sidecoretest: {
        type: Sequelize.STRING(20)
    },
	amnesiagluteus: {
        type: Sequelize.STRING(20)
    },
	contracts: {
        type: Sequelize.STRING(250)
    },
    birdog: {
        type: Sequelize.STRING(20)
    },
	standup: {
        type: Sequelize.STRING(20)
    },
	genu: {
        type: Sequelize.STRING(20)
    },
	balance: {
        type: Sequelize.STRING(250)
    },
	recomendations: {
        type: Sequelize.TEXT
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

export default Evaluation;