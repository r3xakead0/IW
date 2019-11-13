import { Router } from "express";
import { isLoggedIn } from "../lib/auth";
import { addAthlete, createAthlete, editAthlete, getAthletes, deleteAthlete, updateAthlete } from "../controllers/athlete.controller";

const router = Router();

router.get('/add', isLoggedIn, addAthlete);
router.post('/add', isLoggedIn, createAthlete);

router.get('/edit/:id', isLoggedIn, editAthlete);
router.put('/edit/:id', isLoggedIn, updateAthlete);

router.get('/', isLoggedIn, getAthletes); //athletes?page=1
router.delete('/:id', isLoggedIn, deleteAthlete);

export default router;