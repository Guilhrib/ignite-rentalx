import { Repository } from "typeorm";
import { Category } from "../../entities/Category";
import dataSource from "../../../../database/index"
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
    private repository : Repository<Category>

    constructor () {
        this.repository = dataSource.getRepository(Category)
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            name,
            description
        })

        await this.repository.save(category)
    }

    async list(): Promise<Category[]> {
        return await this.repository.find()
    }

    async findByName(name: string): Promise<Category> {
        return await this.repository.findOneBy({ name })
    }
}

export { CategoryRepository }