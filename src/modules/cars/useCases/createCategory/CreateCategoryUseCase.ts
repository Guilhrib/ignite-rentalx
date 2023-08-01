import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
    name: string,
    description: string
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private createCategoryRepository: ICategoryRepository
    ) {}

    async execute ({ name, description }: IRequest) {
        const categoryAlreadyExists = await this.createCategoryRepository.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error('Category already exists!')
        }

        this.createCategoryRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }