import { Router } from 'express';
import { body } from 'express-validator';
import * as userController from '../controllers/user.controller.js';
import * as authMiddleware from '../middleware/auth.middleware.js';
const router  = Router();

router.get('/register', (req, res) => {
    res.send('Register page (GET)');
  });


  router.get('/login', (req, res) => {
    res.send('Login page (GET)');
  });


router.post('/register',
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('password').isLength({min: 3}).withMessage('Password must be at least 3 characters long'),
    userController.createUserController);

    router.post('/login',
        body('email').isEmail().withMessage('Email must be a valid email address'),
        body('password').isLength({min: 3}).withMessage('Password must be at least 3 characters long'),
        userController.loginController);

        router.get('/profile',authMiddleware.authUser, userController.profileController);

        router.get('/logout', authMiddleware.authUser, userController.logoutController);

        
        router.get('/all', authMiddleware.authUser, userController.getAllUsersController);

export default router;