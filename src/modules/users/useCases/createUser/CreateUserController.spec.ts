import supertest from 'supertest';
import { Connection } from 'typeorm';

import { createDatabaseConnection } from '../../../../database';
import { app } from '../../../../shared/infra/http/app';
import { TypeormUserRepository } from '../../repositories/implementations/TypeormUsersRepository';
import { CreateUserError } from './CreateUserError';

let connection: Connection;
let typeormUsersRepository: TypeormUserRepository;

describe('CreateUserController', () => {
  beforeAll(async () => {
    connection = await createDatabaseConnection();
  });

  beforeEach(async () => {
    await connection.runMigrations();

    typeormUsersRepository = new TypeormUserRepository();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  afterEach(async () => {
    await connection.dropDatabase();
  });

  it('should be able to create new user', async () => {
    const { body, status } = await supertest(app).post('/users').send({
      name: 'John Doe',
      email: 'johndoe@email.com',
    });

    expect(status).toBe(201);
    expect(body).toMatchObject({
      id: expect.any(Number),
      name: 'John Doe',
      email: 'johndoe@email.com',
      created_at: expect.any(String),
      updated_at: expect.any(String),
    });
  });

  it('should not be able to create new user', async () => {
    await typeormUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
    });

    const { body, status } = await supertest(app).post('/users').send({
      name: 'John Doe',
      email: 'johndoe@email.com',
    });

    expect(status).toBe(400);
    expect(body).toMatchObject(new CreateUserError());
  });
});
