import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();


// ROTA READ USERS 
router.get('/', loginRequired, UserController.index);

// ROTA SHOW USER
router.get('/:id', UserController.show);


// ROTA CREATE USERS
router.post('/', UserController.create);

// ROTA UPDATE USERS
router.put('/', loginRequired, UserController.update);

// ROTA DELETE USERS
router.delete('/', loginRequired, UserController.delete);


export default router;
