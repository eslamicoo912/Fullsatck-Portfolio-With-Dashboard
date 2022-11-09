import * as controllers from "../../controllers/skill.controllers.js";
import { Router } from "express";

const routes = Router();

routes.post("/skills", controllers.create);
routes.get("/skills", controllers.getAll);
routes.get("/skills/:id", controllers.getOne);
routes.patch("/skills/:id", controllers.update);
routes.delete("/skills/:id", controllers.remove);

export default routes;
