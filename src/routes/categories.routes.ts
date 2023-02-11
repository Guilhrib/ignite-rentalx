import { Router } from "express"
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository"
import { createCategoryController } from "../modules/cars/useCases/createCategory"
import { listCategoryController } from "../modules/cars/useCases/listCategory"

const categoriesRoutes = Router()
const categoryRepository = new CategoryRepository()

categoriesRoutes.post('/', (req, res) => createCategoryController.handle(req, res))

categoriesRoutes.get('/', (req, res) => listCategoryController.handle(req, res))

export { categoriesRoutes }