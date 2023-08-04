import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';
import { AppError } from '../errors/AppError';

interface IPayload {
  sub: string
}

export async function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization
  if (!authHeader) {
    throw new AppError('Token not found', 401)
  }

  const [, token] = authHeader.split(' ')
  try {
    const { sub: userId } = verify(token, '110e9b8f40bf16385aa46f82080d1c93') as IPayload

    const usersRepository = new UsersRepository()
    const user = await usersRepository.findById(userId)
    if (!user) {
      throw new AppError('User does not exists', 401)
    }

    request.user = {
      id: userId
    }

    next()
  } catch {
    throw new AppError('Invalid token', 401)
  }
}