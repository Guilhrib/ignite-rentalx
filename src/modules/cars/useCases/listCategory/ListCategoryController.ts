import { Request, Response } from 'express'
import { ListCategoryUseCase } from "./ListControllerUseCase"

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) { }

  async handle(req: Request, res: Response): Promise<Response> {

    const categories = await this.listCategoryUseCase.execute()

    return res.json(categories)
  }
}

export { ListCategoryController }
