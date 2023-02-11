import { Specification } from "../model/Specification"

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): void
  findById(name: string): Specification
}

export { ISpecificationRepository, ICreateSpecificationDTO }