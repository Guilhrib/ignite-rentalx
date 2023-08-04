import multer from 'multer';
import { Router } from 'express'

import uploadConfig from '../config/upload'
import { ensureAuthenticate } from '../midlewares/ensureAuthenticate';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController'
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'

const userRoutes = Router()
const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'))

const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

userRoutes.post('/', createUserController.handle)
userRoutes.patch('/avatar', ensureAuthenticate, uploadAvatar.single('avatar'), updateUserAvatarController.handle)

export { userRoutes }