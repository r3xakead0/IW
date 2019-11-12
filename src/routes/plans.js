import { Router } from "express";

const router = Router();
const { isLoggedIn } = require('../lib/auth');

import { addPlan, createPlan, editPlan, getPlans, deletePlan, updatePlan } from "../controllers/Plan.controller";

router.get('/add/:id', isLoggedIn, addPlan);
router.post('/add', isLoggedIn, createPlan);

router.get('/edit/:id', isLoggedIn, editPlan);
router.put('/edit/:id', isLoggedIn, updatePlan);

router.get('/:id', isLoggedIn, getPlans); 
router.delete('/:id', isLoggedIn, deletePlan);

module.exports = router;