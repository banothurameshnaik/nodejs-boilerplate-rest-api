import express from 'express';

// Validations
import {
    validateRegister,
    validateLogin,
} from '../utils/validators';

import {
    doRegister,
    doLogin,
    isAuthorizedUser,
} from '../controllers/AuthController';

import {
    getUserDetails,
    updateUserDetails,
    deleteUserDetails,
} from '../controllers/UsersController';

const router = express.Router();

// Auth
router.post('/register', validateRegister, doRegister);

router.post('/login', validateLogin, doLogin);

// Users
router.get('/users/:id', isAuthorizedUser, getUserDetails);

router.patch('/users/:id', isAuthorizedUser, updateUserDetails);

router.put('/users/:id', isAuthorizedUser, updateUserDetails);

router.delete('/users/:id', isAuthorizedUser, deleteUserDetails);

export default router;
