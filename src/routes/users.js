import { Router } from "express";
<<<<<<< HEAD

=======
>>>>>>> 1316f13d4a5331f7a677eba6b533ae998dc6283c
const router = Router();

import { createUser, getUsers, getOneUser, deleteUser, updateUser } from "../controllers/user.controller";

<<<<<<< HEAD
router.post('/', createUser);
router.get('/', getUsers); //users?page=1
router.get('/:id', getOneUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router;
=======
// /api/Users/
router.post('/', createUser);
router.get('/', getUsers);

// /api/Users/:UserID
router.get('/:id', getOneUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
>>>>>>> 1316f13d4a5331f7a677eba6b533ae998dc6283c
