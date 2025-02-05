import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

// ROTA CREATE USERS
router.post('/', UserController.create);

// ROTA READ USERS
router.get('/', UserController.index);

// ROTA SHOW USER
router.get('/:id', UserController.show);

// ROTA UPDATE USERS
router.put('/:id', UserController.update);

// ROTA DELETE USERS
router.delete('/:id', UserController.delete);


export default router;
