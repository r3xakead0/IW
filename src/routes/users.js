import { Router } from "express";

const router = Router();

import { addUser, createUser, editUser, getUsers, deleteUser, updateUser } from "../controllers/user.controller";

router.get('/add', addUser);
router.post('/add', createUser);

router.get('/edit/:id', editUser);
router.put('/edit/:id', updateUser);

router.get('/', getUsers); //users?page=1
router.delete('/:id', deleteUser);

module.exports = router;