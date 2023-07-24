import { CategoryRepository } from "../../repositories/implementations/CategoryRepository"
import { ImportCategoryUseCase } from "./ImportCategooryUseCase"
import { ImportCategoryController } from "./ImportCategoryController"

const categoriesRepository = CategoryRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export { importCategoryController }