import { repository } from "../database/repository/repository.js";

import { createUseCase } from "../services/useCase/createUseCase.js";
import { createController } from "../controllers/createController.js";
import { createRouter } from "../routers/createRouter.js";

export const makeCreate = (router) => {
    const database = new repository();
    const useCase = new createUseCase(database);
    const controller = new createController(useCase);
    const route = new createRouter(controller, router);
    return route;
}