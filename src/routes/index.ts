import { Router } from "express";

import { categoriesRoutes } from './categories.routes'
import { specificationRoutes } from './specification.routes'
import { userRoutes } from './users.routes'

const router = Router()

router.use('/categories', categoriesRoutes)
router.use('/specifications', specificationRoutes)
router.use('/users', userRoutes)

export { router }