import { repository } from "../database/repository/repository.js";

import { deleteUseCase } from "../services/useCase/deleteUseCase.js";
import { deleteController } from "../controllers/deleteController.js";
import { deleteRouter } from "../routers/deleteRouter.js";

export const makeDelete = (router) => {
  const database = new repository();
  const useCase = new deleteUseCase(database);
  const controller = new deleteController(useCase);
  const route = new deleteRouter(controller, router);
  return route;
};
