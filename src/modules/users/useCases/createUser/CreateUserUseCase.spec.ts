import { InMemoryUsersRepository } from '../../repositories/in-memory/InMemoryUsersRepository';
import { CreateUserError } from './CreateUserError';
import { CreateUserUseCase } from './CreateUserUseCase';

let createUserUseCase: CreateUserUseCase;
let inMemoryUsersRepository: InMemoryUsersRepository;

describe('CreateUserUseCase', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
  });

  it('should be able to create new user', async () => {
    const user = await createUserUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
    });

    expect(user).toMatchObject({
      id: expect.any(Number),
      name: 'John Doe',
      email: 'johndoe@email.com',
      created_at: expect.any(Date),
      updated_at: expect.any(Date),
    });
  });

  it('should not be able to create new user with same email from another', async () => {
    await inMemoryUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
    });

    await expect(
      createUserUseCase.execute({
        name: 'John Doe',
        email: 'johndoe@email.com',
      })
    ).rejects.toMatchObject(new CreateUserError());
  });
});
