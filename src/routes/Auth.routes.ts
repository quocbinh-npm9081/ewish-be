import { Router } from 'express';
import AuthControllers from '@/controllers/Auth.controllers';
const router = Router();

router.get('/register', AuthControllers.register);

export default router;
