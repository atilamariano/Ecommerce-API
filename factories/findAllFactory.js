import { repository } from "../database/repository/repository.js";

import { findAllUseCase } from "../services/useCase/findAllUseCase.js";
import { findAllController } from "../controllers/findAllController.js";
import { findAllRouter } from "../routers/findAllRouter.js";

export const makeFindAll = (router) => {
  const database = new repository();
  const useCase = new findAllUseCase(database);
  const controller = new findAllController(useCase);
  const route = new findAllRouter(controller, router);
  return route;
};
