import { repository } from "../database/repository/repository.js";

import { updateUseCase } from "../services/useCase/updateUseCase.js";
import { findByIdUseCase } from "../services/useCase/findByIdUseCase.js";
import { updateController } from "../controllers/updateController.js";
import { updateRouter } from "../routers/updateRouter.js";

export const makeUpdate = (router) => {
  const database = new repository();
  const findById = new findByIdUseCase(database);
  const useCase = new updateUseCase(database, findById);
  const controller = new updateController(useCase);
  const route = new updateRouter(controller, router);
  return route;
};
