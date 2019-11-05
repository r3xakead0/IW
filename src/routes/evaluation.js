import { Router } from "express";

const router = Router();

import { addEvaluation, createEvaluation, updateEvaluation } from "../controllers/Evaluation.controller";

router.get('/:id', addEvaluation);

router.post('/add', createEvaluation);
router.put('/edit/:id', updateEvaluation);

module.exports = router;