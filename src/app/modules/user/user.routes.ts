import express from 'express';
import { USER_ROLES } from '../../../enums/user';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import fileUploadHandler from '../../middlewares/fileUploaderHandler';
const router = express.Router();

router.get(
    '/profile',
    auth(USER_ROLES.ADMIN, USER_ROLES.SELLER, USER_ROLES.SUPER_ADMIN, USER_ROLES.CUSTOMER),
    UserController.getUserProfile
);
  
router.post(
    '/create-admin',
    validateRequest(UserValidation.createAdminZodSchema),
    UserController.createAdmin
);

router
    .route('/')
    .post(
        UserController.createUser
    )
    .get(
        auth(USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN),
        UserController.userList
    )
    .patch(
        auth(USER_ROLES.ADMIN, USER_ROLES.SELLER, USER_ROLES.CUSTOMER, USER_ROLES.SUPER_ADMIN),
        fileUploadHandler(),
        UserController.updateProfile
    );

export const UserRoutes = router;