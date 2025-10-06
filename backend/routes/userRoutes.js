import express from 'express';
const router = express.Router();
import { authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUserById } from '../controllers/userController.js';

router.post('/login', authUser);
router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUserById);

export default router;