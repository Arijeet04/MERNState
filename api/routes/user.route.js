import express from 'express';
import {test, updatedUser} from '../controllers/user.controllers.js';
import { verifyToken } from '../utils/verifyUser.js';


const router =express.Router();

router.get('/test', test);
router.post('/update/:id',verifyToken,updatedUser);

export default router;