import { CategoryRepository } from "../../repositories/implementations/CategoryRepository"
import { ImportCategoryUseCase } from "./ImportCategoryUseCase"
import { ImportCategoryController } from "./ImportCategoryController"

export default () : ImportCategoryController => {
  const categoriesRepository = new CategoryRepository()
  const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)
  const importCategoryController = new ImportCategoryController(importCategoryUseCase)

  return importCategoryController
}