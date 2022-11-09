import * as controllers from "../../controllers/project.controllers.js";
import { Router } from "express";

const routes = Router();

routes.post("/projects", controllers.create);
routes.get("/projects", controllers.getAll);
routes.get("/projects/:id", controllers.getOne);
routes.patch("/projects/:id", controllers.update);
routes.delete("/projects/:id", controllers.remove);

export default routes;
