import { Router } from "express";
const router = Router();

import { createProfile, getProfiles, getOneProfile, deleteProfile, updateProfile } from "../controllers/profile.controller";

// /api/Profiles/
router.post('/', createProfile);
router.get('/', getProfiles);

// /api/Profiles/:ProfileID
router.get('/:id', getOneProfile);
router.delete('/:id', deleteProfile);
router.put('/:id', updateProfile);

export default router;