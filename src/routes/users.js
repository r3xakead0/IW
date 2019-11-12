import { Router } from "express";

const router = Router();
const { isLoggedIn } = require('../lib/auth');

import { addUser, createUser, editUser, getUsers, deleteUser, updateUser } from "../controllers/user.controller";

router.get('/add', isLoggedIn, addUser);
router.post('/add', isLoggedIn, createUser);

router.get('/edit/:id', isLoggedIn, editUser);
router.put('/edit/:id', isLoggedIn, updateUser);

router.get('/', isLoggedIn, getUsers); //users?page=1
router.delete('/:id', isLoggedIn, deleteUser);

module.exports = router;