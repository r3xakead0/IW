import Plan from "../models/Plan";
import Athlete from "../models/Athlete";

export async function addPlan(req, res) {
    try {
        const { id } = req.params;

        const athlete = await Athlete.findOne({
            attributes: ['id', 'firstname', 'lastname', 'birthdate', 'age'],
            where: { id }
        });
        
        res.render('plans/add', { athlete });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}

export async function createPlan(req, res) {
    const { athleteid, plandate, sport, minutes, meters, jobs, type } = req.body;
    const createddate = Date.now();
    try {
        let newPlan = await Plan.create({
            athleteid, 
            plandate,
            sport, 
            minutes, 
            meters,
            jobs, 
            type, 
            completed: false, 
            createddate
        }, {
            fields: ['athleteid', 'plandate', 'sport', 'minutes', 'meters', 'jobs', 'type', 'createddate']
        });

        if (newPlan) {
            res.redirect('/plans/' + athleteid);
        }
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}

export async function editPlan(req, res) {
    try {
        const { id } = req.params;

        const plan = await Plan.findOne({
            attributes: ['id', 'athleteid', 'plandate', 'sport', 'minutes', 'meters', 'jobs', 'type'],
            where: { id }
        });

        const athlete = await Athlete.findOne({
            attributes: ['id', 'firstname', 'lastname', 'birthdate', 'age'],
            where: { id: plan.athleteid }
        });

        res.render('plans/edit', { athlete, plan });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}

export async function updatePlan(req, res) {
    const { id } = req.params; 
    const { athleteid, plandate, sport, minutes, meters, jobs, type } = req.body;
    const updateddate = Date.now();
    try {

        const updateRowCount = await Plan.update({
            plandate,
            sport, 
            minutes, 
            meters,
            jobs, 
            type,
            updateddate
        },
            {
                where: { id }
            }
        );
        if (updateRowCount > 0) {
            res.redirect('/athletes' + athleteid);
        }
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}

export async function getPlans(req, res) {
    try {

        const { id } = req.params;

        const page = req.query.page || 1;
        const pageSize = 10;

        const offset = (page - 1) * pageSize;
        const limit = offset + pageSize;
        const totalRows = await Plan.count();

        const pageCount = Math.ceil(totalRows / pageSize);

        const plans = await Plan.findAll({
            limit,
            offset,
            attributes: ['id', 'plandate', 'day', 'sport', 'minutes', 'meters', 'jobs', 'type'],
            order: [
                ['id', 'ASC']
            ],
            where: {
                athleteid: id
            }
        });

        res.render('plans/list', {
            athleteid: id,
            plans,
            pagination: {
                page,
                limit: pageSize,
                totalRows,
                pageCount
            }
        });

    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}

export async function deletePlan(req, res) {
    try {
        const { id } = req.params;

        const plan = await Plan.findOne({
            attributes: ['athleteid'],
            where: { id }
        });

        const deleteRowCount = await Plan.destroy({
            where: { id }
        });

        if (deleteRowCount > 0) {
            res.redirect('/plans/' + plan.athleteid);
        }
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}
