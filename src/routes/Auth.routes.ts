import { Router } from 'express';
import AuthControllers from '@/controllers/Auth.controllers';
const router = Router();

router.post('/register', AuthControllers.register);
router.post('/login', AuthControllers.login);

export default router;
