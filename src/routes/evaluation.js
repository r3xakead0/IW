import { Router } from "express";

const router = Router();
const { isLoggedIn } = require('../lib/auth');

import { addEvaluation, createEvaluation, updateEvaluation } from "../controllers/Evaluation.controller";

router.get('/:id', isLoggedIn, addEvaluation);

router.post('/add', isLoggedIn, createEvaluation);
router.put('/edit/:id', isLoggedIn, updateEvaluation);

module.exports = router;