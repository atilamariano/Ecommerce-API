import { repository } from "../database/repository/repository.js";

import { findByIdUseCase } from "../services/useCase/findByIdUseCase.js";
import { findByIdController } from "../controllers/findByIdController.js";
import { findByIdRouter } from "../routers/findByIdRouter.js";

export const makeFindById = (router) => {
  const database = new repository();
  const useCase = new findByIdUseCase(database);
  const controller = new findByIdController(useCase);
  const route = new findByIdRouter(controller, router);
  return route;
};
