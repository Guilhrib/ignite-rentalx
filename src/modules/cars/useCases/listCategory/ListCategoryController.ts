import { Request, Response } from 'express'
import { ListCategoryUseCase } from "./ListControllerUseCase"
import { container } from 'tsyringe'

class ListCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCategoryUseCase = container.resolve(ListCategoryUseCase)
    const categories = await listCategoryUseCase.execute()

    return res.json(categories)
  }
}

export { ListCategoryController }
