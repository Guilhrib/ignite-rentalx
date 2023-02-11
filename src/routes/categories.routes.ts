import { Router } from "express"
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository"
import { createCategoryController } from "../modules/cars/useCases/createCategory"

const categoriesRoutes = Router()
const categoryRepository = new CategoryRepository()

categoriesRoutes.post('/', (req, res) => createCategoryController.handle(req, res))

categoriesRoutes.get('/', (req, res) => {
    const categories = categoryRepository.list()

    return res.json(categories)
})

export { categoriesRoutes }