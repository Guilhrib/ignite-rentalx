import { Category } from "../model/Category"

interface ICreateCategoryDTO {
    name: string
    description: string
}

interface ICategoryRepository {
    create({ name, description }: ICreateCategoryDTO): void
    list(): Category[]
    findByName(name: string): Category
}

export {
    ICreateCategoryDTO,
    ICategoryRepository
}