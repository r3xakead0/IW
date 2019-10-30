import { Router } from "express";

const router = Router();

import { addUser, createUser, editUser, getUsers, getOneUser, deleteUser, updateUser } from "../controllers/user.controller";

router.get('/add', addUser);
router.post('/add', createUser);

router.get('/edit/:id', editUser);
router.put('/:id', updateUser);

router.get('/', getUsers); //users?page=1
router.get('/:id', getOneUser);

router.delete('/:id', deleteUser);

module.exports = router;