import { Router } from "express";

const router = Router();

import { addAthlete, createAthlete, editAthlete, getAthletes, deleteAthlete, updateAthlete } from "../controllers/athlete.controller";

router.get('/add', addAthlete);
router.post('/add', createAthlete);

router.get('/edit/:id', editAthlete);
router.put('/edit/:id', updateAthlete);

router.get('/', getAthletes); //athletes?page=1
router.delete('/:id', deleteAthlete);

module.exports = router;