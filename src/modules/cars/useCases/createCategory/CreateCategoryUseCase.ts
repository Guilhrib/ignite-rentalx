import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { AppError } from "../../../../errors/AppError";

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
            throw new AppError('Category already exists!')
        }

        this.createCategoryRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }