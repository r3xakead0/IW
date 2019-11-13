import { Router } from "express";
import { createProfile, getProfiles, getOneProfile, deleteProfile, updateProfile } from "../controllers/profile.controller";

const router = Router();

// /api/Profiles/
router.post('/', createProfile);
router.get('/', getProfiles);

// /api/Profiles/:ProfileID
router.get('/:id', getOneProfile);
router.delete('/:id', deleteProfile);
router.put('/:id', updateProfile);

export default router;