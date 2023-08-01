import { Router } from "express"
import multer from "multer"

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController"
import importCategoryController from "../modules/cars/useCases/importCategory"
import listCategoryController from "../modules/cars/useCases/listCategory"

const categoriesRoutes = Router()
const uploader = multer({
  dest: "./tmp"
})

const createCategoryController = new CreateCategoryController()

categoriesRoutes.post('/', createCategoryController.handle)

categoriesRoutes.get('/', (req, res) => listCategoryController().handle(req, res))

categoriesRoutes.post('/import', uploader.single("file"), (req, res) => importCategoryController().handle(req, res))

export { categoriesRoutes }