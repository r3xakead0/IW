import { Router } from "express";
const router = Router();

import { createUser, getUsers, getOneUser, deleteUser, updateUser } from "../controllers/user.controller";

// /api/Users/
router.post('/', createUser);
router.get('/', getUsers);

// /api/Users/:UserID
router.get('/:id', getOneUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
