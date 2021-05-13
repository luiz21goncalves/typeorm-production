import { Router } from 'express';

import { createUser } from '../../../../modules/products/useCases/createUser';

const usersRouter = Router();

usersRouter.post('/', (request, response) => {
  createUser().createUserController.handle(request, response);
});

export { usersRouter };
