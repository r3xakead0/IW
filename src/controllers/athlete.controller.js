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
    const { firstname, lastname, birthdate, phonenumber, active } = req.body;
    const { running, cycling, swimming, conditioning, strength, otherobjectives } = req.body;
    const { size, weight, bloodtype, fatpercentage, waistcircumference, middlethighcircumference } = req.body;
    const { injuries, otheractivities, backgrounddescription, objectives, nutritiondescription } = req.body; 
    const createddate = Date.now();
    try {
        let newAthlete = await Athlete.create({
            firstname, 
            lastname,
            birthdate, 
            phonenumber, 
            running: (running === 'on'),
            cycling: (cycling === 'on'), 
            swimming: (swimming === 'on'), 
            conditioning: (conditioning === 'on'), 
            strength: (strength === 'on'), 
            otherobjectives, 
            size, 
            weight, 
            bloodtype, 
            fatpercentage, 
            waistcircumference,
            middlethighcircumference, 
            injuries, 
            otheractivities, 
            backgrounddescription, 
            objectives, 
            nutritiondescription, 
            active: (active === 'on'), 
            createddate
        }, {
            fields: ['firstname', 'lastname', 'birthdate', 'phonenumber', 
            'running', 'cycling', 'swimming', 'conditioning', 'strength', 
            'otherobjectives', 'size', 'weight', 'bloodtype', 
            'fatpercentage', 'waistcircumference', 'middlethighcircumference', 'injuries',
            'otheractivities', 'backgrounddescription', 'objectives', 'nutritiondescription',
            'active', 'createddate']
        });
        console.log(newAthlete);
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

        const athlete = await Athlete.findOne({
            attributes: ['id', 'firstname', 'lastname', 'birthdate', 'phonenumber', 'age',
            'running', 'cycling', 'swimming', 'conditioning', 'strength', 
            'otherobjectives', 'size', 'weight', 'bloodtype', 
            'fatpercentage', 'waistcircumference', 'middlethighcircumference', 'injuries',
            'otheractivities', 'backgrounddescription', 'objectives', 'nutritiondescription',
            'active'],
            where: { id },
            order: [
                ['id', 'ASC']
            ]
        });

        const questions = await Question.findAll({
            attributes: ['id', 'description'],
            order: [
                ['id', 'ASC']
            ]
        });

        res.render('Athletes/edit', { athlete, questions });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}

export async function updateAthlete(req, res) {
    const { id } = req.params;
    const { firstname, lastname, birthdate, phonenumber, active } = req.body;
    const { running, cycling, swimming, conditioning, strength, otherobjectives } = req.body;
    const { size, weight, bloodtype, fatpercentage, waistcircumference, middlethighcircumference } = req.body;
    const { injuries, otheractivities, backgrounddescription, objectives, nutritiondescription } = req.body; 
    const updateddate = Date.now();
    try {

        const updateRowCount = await Athlete.update({
            firstname, 
            lastname,
            birthdate, 
            phonenumber, 
            running: (running === 'on'),
            cycling: (cycling === 'on'), 
            swimming: (swimming === 'on'), 
            conditioning: (conditioning === 'on'), 
            strength: (strength === 'on'), 
            otherobjectives, 
            size, 
            weight, 
            bloodtype, 
            fatpercentage, 
            waistcircumference,
            middlethighcircumference, 
            injuries, 
            otheractivities, 
            backgrounddescription, 
            objectives, 
            nutritiondescription, 
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
            attributes: ['id', 'firstname', 'lastname', 'birthdate', 'age', 'phonenumber', 'active'],
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
