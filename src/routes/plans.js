import { Router } from "express";

const router = Router();

import { addPlan, createPlan, editPlan, getPlans, deletePlan, updatePlan } from "../controllers/Plan.controller";

router.get('/add/:id', addPlan);
router.post('/add', createPlan);

router.get('/edit/:id', editPlan);
router.put('/edit/:id', updatePlan);

router.get('/:id', getPlans); 
router.delete('/:id', deletePlan);

module.exports = router;