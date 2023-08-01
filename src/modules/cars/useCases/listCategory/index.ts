import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListControllerUseCase";

export default () : ListCategoryController => {
  const categoryRepository = new CategoryRepository()
  const listCategoryUseCase = new ListCategoryUseCase(categoryRepository)
  const listCategoryController = new ListCategoryController(listCategoryUseCase)

  return listCategoryController
}