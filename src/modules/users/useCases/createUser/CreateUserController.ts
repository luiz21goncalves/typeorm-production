import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email } = request.body;

      const user = await this.createUserUseCase.execute({
        name,
        email,
      });

      return response.status(201).json(user);
    } catch (err) {
      return response.status(err.statusCode).json({
        statusCode: err.statusCode,
        message: err.message,
      });
    }
  }
}
