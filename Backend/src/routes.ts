import { Router } from "express";

import ClassesController from "./app/controllers/ClassesController";

const routes = Router()

routes.post("/classes", ClassesController.store);

export default routes
