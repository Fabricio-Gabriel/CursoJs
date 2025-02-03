import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.get('/user', UserController.create);


export default router;
