import { AppError } from "../../../../errors/AppError"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { UserRepositoryInMemory } from "../../repositories/inMemory/UserRepositoryInMemory"
import { CreateUseruseCase } from "../createUser/CreateUserUseCase"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"


let authenticateUserUseCase: AuthenticateUserUseCase
let usersRepositoryInMemory: UserRepositoryInMemory
let createUserUseCase: CreateUseruseCase

describe('Authenticate User', () => {
  beforeEach(async () => {
    usersRepositoryInMemory = new UserRepositoryInMemory()
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
    createUserUseCase = new CreateUseruseCase(usersRepositoryInMemory)
  })

  it('Should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '123456',
      email: 'eKX8N@example.com',
      name: 'User Test',
      password: '1234'
    }

    await createUserUseCase.execute(user)

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    })

    expect(result).toHaveProperty('token')
  })

  it('Should not be able to authenticate an user with non existing user', async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "eKX8N@example.com",
        password: "1234"
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('Should not be able to authenticate with incorrect password', async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '123456',
        email: 'eKX8N@example.com',
        name: 'User Test',
        password: '1234'
      }

      await createUserUseCase.execute(user)

      await authenticateUserUseCase.execute({
        email: user.email,
        password: "incorrect password"
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})