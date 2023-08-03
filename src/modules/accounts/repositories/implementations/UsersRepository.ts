import { Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";
import { User } from "../../entities/User";
import dataSource from '../../../../database'


class UsersRepository implements IUserRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = dataSource.getRepository(User)
  }

  async create({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      password,
      email,
      driver_license
    })

    await this.repository.save(user)
  }
}

export { UsersRepository }