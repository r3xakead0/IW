import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const BackgroundQuestion = sequelize.define('backgroundquestions', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING(100)
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

export default BackgroundQuestion;