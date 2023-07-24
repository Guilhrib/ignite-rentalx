import { Router } from "express"
import multer from "multer"
import { createCategoryController } from "../modules/cars/useCases/createCategory"
import { importCategoryController } from "../modules/cars/useCases/importCategory"
import { listCategoryController } from "../modules/cars/useCases/listCategory"

const categoriesRoutes = Router()
const uploader = multer({
  dest: "./tmp"
})

categoriesRoutes.post('/', (req, res) => createCategoryController.handle(req, res))

categoriesRoutes.get('/', (req, res) => listCategoryController.handle(req, res))

categoriesRoutes.post('/import', uploader.single("file"), (req, res) => importCategoryController.handle(req, res))

export { categoriesRoutes }