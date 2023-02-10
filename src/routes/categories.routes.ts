import { Router } from "express"
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository"
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService"

const categoriesRoutes = Router()
const categoryRepository = new CategoryRepository()

categoriesRoutes.post('/', (req, res) => {
    const { name, description } = req.body

    const createCategoryService = new CreateCategoryService(categoryRepository)

    createCategoryService.execute({ name, description })

    return res.status(201).send()
})

categoriesRoutes.get('/', (req, res) => {
    const categories = categoryRepository.list()

    return res.json(categories)
})

export { categoriesRoutes }