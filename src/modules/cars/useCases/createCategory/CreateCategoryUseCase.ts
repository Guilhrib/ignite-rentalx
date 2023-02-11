import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
    name: string,
    description: string
}

class CreateCategoryUseCase {

    constructor(private createCategoryRepository: ICategoryRepository) {}

    execute ({ name, description }: IRequest) {
        const categoryAlreadyExists = this.createCategoryRepository.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error('Category already exists!')
        }

        this.createCategoryRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }