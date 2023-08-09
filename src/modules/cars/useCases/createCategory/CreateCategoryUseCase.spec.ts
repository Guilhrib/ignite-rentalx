import { CreateCategoryUseCase } from "./CreateCategoryUseCase"
import { CategoryRepositoryInMemory } from '../../repositories/inMemory/CategoriesRepositoryInMemory'
import { AppError } from "../../../../errors/AppError"

let categoriesRepositoy: CategoryRepositoryInMemory
let createCategoryUseCase: CreateCategoryUseCase

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoy = new CategoryRepositoryInMemory()
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoy)
  })


  it("Should be able to create a new category", async () => {
    const category = {
      name: 'Category Test',
      description: 'Category description test'
    }

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description
    })

    const categoryCreated = await categoriesRepositoy.findByName(category.name)

    expect(categoryCreated).toHaveProperty('id')
  })

  it("Should not be able to create a new category with name exists", async () => {
    expect(async () => {
      const category = {
        name: 'Category Test',
        description: 'Category description test'
      }
  
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      })
  
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})