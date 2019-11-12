import { Router } from "express";

const router = Router();
const { isLoggedIn } = require('../lib/auth');

import { addAthlete, createAthlete, editAthlete, getAthletes, deleteAthlete, updateAthlete } from "../controllers/athlete.controller";

router.get('/add', isLoggedIn, addAthlete);
router.post('/add', isLoggedIn, createAthlete);

router.get('/edit/:id', isLoggedIn, editAthlete);
router.put('/edit/:id', isLoggedIn, updateAthlete);

router.get('/', isLoggedIn, getAthletes); //athletes?page=1
router.delete('/:id', isLoggedIn, deleteAthlete);

module.exports = router;