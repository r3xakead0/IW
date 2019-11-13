import { Router } from "express";
import { isLoggedIn } from "../lib/auth";

const router = Router();

import { addEvaluation, createEvaluation, updateEvaluation } from "../controllers/evaluation.controller";

router.get('/:id', isLoggedIn, addEvaluation);

router.post('/add', isLoggedIn, createEvaluation);
router.put('/edit/:id', isLoggedIn, updateEvaluation);

export default router;