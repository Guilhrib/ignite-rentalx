import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string
}

export async function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization
  if (!authHeader) {
    throw new Error('Token not found')
  }

  const [, token] = authHeader.split(' ')
  try {
    const { sub: userId } = verify(token, '110e9b8f40bf16385aa46f82080d1c93') as IPayload

    const usersRepository = new UsersRepository()
    const user = await usersRepository.findById(userId)
    if (!user) {
      throw new Error('User does not exists')
    }

    next()
  } catch {
    throw new Error('Invalid token')
  }
}