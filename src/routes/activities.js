'use strict';
const router = require('express').Router();

// const pool = require('../database');
// const { isLoggedIn } = require('../lib/auth');

// router.get('/:id', isLoggedIn, async (req, res) => {
//     const { id } = req.params;
//     const actividades = await pool.query('SELECT * FROM actividad WHERE idEspecialidad = ? and activo = ?', [id, true]);
//     res.json(actividades);
// });

module.exports = router;