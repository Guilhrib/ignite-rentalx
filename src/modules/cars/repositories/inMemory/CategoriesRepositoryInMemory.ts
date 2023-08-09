import { Category } from "../../entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoryRepository";


class CategoryRepositoryInMemory implements ICategoryRepository {
  categories: Category[] = []

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category()

    Object.assign(category, {
      name,
      description
    })

    this.categories.push(category)
  }
  async list(): Promise<Category[]> {
    return this.categories
  }
  async findByName(name: string): Promise<Category> {
    const category = this.categories.find(c => c.name == name)
    return category
  }
}

export { CategoryRepositoryInMemory }