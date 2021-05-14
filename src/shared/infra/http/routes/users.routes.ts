import { Router } from 'express';

import { createUser } from '../../../../modules/users/useCases/createUser';

const usersRouter = Router();

usersRouter.post('/', (request, response) => {
  createUser().createUserController.handle(request, response);
});

export { usersRouter };
