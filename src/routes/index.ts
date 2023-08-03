import { Router } from "express";

import { authenticateRoutes } from './authenticate.routes'
import { userRoutes } from './users.routes'
import { categoriesRoutes } from './categories.routes'
import { specificationRoutes } from './specification.routes'

const router = Router()

router.use(authenticateRoutes)
router.use('/users', userRoutes)
router.use('/categories', categoriesRoutes)
router.use('/specifications', specificationRoutes)

export { router }