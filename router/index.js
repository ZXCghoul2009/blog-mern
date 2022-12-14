import { Router } from 'express';
import userController from '../controllers/user-controller.js';
const router = new Router();

router.post('/login', userController.login);
router.post('/signup', userController.signup);
router.post('/logout', userController.logout);
router.get('/activate:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('users', userController.getUsers);

export default router