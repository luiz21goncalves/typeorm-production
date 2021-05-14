import { TypeormUserRepository } from '../../repositories/implementations/TypeormUsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

export function createUser() {
  const typeormUserRepository = new TypeormUserRepository();
  const createUserUseCase = new CreateUserUseCase(typeormUserRepository);
  const createUserController = new CreateUserController(createUserUseCase);

  return {
    createUserUseCase,
    createUserController,
  };
}
