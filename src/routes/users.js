import { Router } from "express";

const router = Router();

import { createUser, getUsers, getOneUser, deleteUser, updateUser } from "../controllers/user.controller";

router.post('/', createUser);
router.get('/', getUsers); //users?page=1
router.get('/:id', getOneUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router;