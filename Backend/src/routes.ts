import { Router } from "express";

import ClassesController from "./app/controllers/ClassesController";
import ConnectionsControlle from "./app/controllers/ConnectionsControlle";

const routes = Router()

routes.get("/classes", ClassesController.index);
routes.post("/classes", ClassesController.store);

routes.get('/connections', ConnectionsControlle.index)
routes.post('/connections', ConnectionsControlle.store)

export default routes
