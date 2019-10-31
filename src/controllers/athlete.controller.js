import Athlete from "../models/Athlete";
import Question from "../models/BackgroundQuestion";

export async function addAthlete(req, res) {
    try {
        const questions = await Question.findAll({
            attributes: ['id', 'description'],
            order: [
                ['id', 'ASC']
            ]
        });
        res.render('Athletes/add', { questions });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}

export async function createAthlete(req, res) {
    const { name, password, fullname, email, profileid, active } = req.body;
    const createddate = Date.now();
    try {
        let newAthlete = await Athlete.create({
            name,
            password: await helpers.encryptPassword(password),
            fullname,
            email,
            profileid,
            active,
            createddate
        }, {
            fields: ['name', 'password', 'fullname', 'email', 'profileid', 'active', 'createddate']
        });
        if (newAthlete) {
            res.redirect('/athletes');
        }
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}

export async function editAthlete(req, res) {
    try {
        const { id } = req.params;
        const Athlete = await Athlete.findOne({
            attributes: ['id', 'name', 'fullname', 'email', 'profileid', 'active'],
            where: { id },
            include: [{
                model: Profile,
                attributes: ['name'],
            }]
        });
        const profiles = await Profile.findAll({
            attributes: ['id', 'name'],
            order: [
                ['id', 'ASC']
            ]
        });
        res.render('Athletes/edit', { Athlete, profiles });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}

export async function updateAthlete(req, res) {
    const { id } = req.params;
    const { name, password, fullname, email, profileid, active } = req.body;
    const updateddate = Date.now();
    try {

        const updateRowCount = await Athlete.update({
            name,
            password: await helpers.encryptPassword(password),
            fullname,
            email,
            profileid,
            active: (active === 'on'),
            updateddate
        },
            {
                where: { id }
            }
        );
        if (updateRowCount > 0) {
            res.redirect('/athletes');
        }
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}

export async function getAthletes(req, res) {
    try {
        const page = req.query.page || 1;
        const pageSize = 10;

        const offset = (page - 1) * pageSize;
        const limit = offset + pageSize;
        const totalRows = await Athlete.count();

        const pageCount = Math.ceil(totalRows / pageSize);

        const Athletes = await Athlete.findAll({
            limit,
            offset,
            attributes: ['id', 'firstname', 'lastname', 'birthdate', 'profileid', 'active'],
            order: [
                ['id', 'ASC']
            ]
        });
        res.render('athletes/list', {
            Athletes,
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

export async function deleteAthlete(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Athlete.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            res.redirect('/athletes');
        }
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}
