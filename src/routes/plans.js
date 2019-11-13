import { Router } from "express";
import { isLoggedIn } from "../lib/auth";
import { addPlan, createPlan, editPlan, getPlans, deletePlan, updatePlan } from "../controllers/plan.controller";

const router = Router();

router.get('/add/:id', isLoggedIn, addPlan);
router.post('/add', isLoggedIn, createPlan);

router.get('/edit/:id', isLoggedIn, editPlan);
router.put('/edit/:id', isLoggedIn, updatePlan);

router.get('/:id', isLoggedIn, getPlans); 
router.delete('/:id', isLoggedIn, deletePlan);

export default router;