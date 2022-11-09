import * as controllers from "../../controllers/skill.controllers.js";
import { Router } from "express";

const routes = Router();

routes.post("/", controllers.create);
routes.get("/", controllers.getAll);
routes.get("/:id", controllers.getOne);
routes.patch("/:id", controllers.update);
routes.delete("/:id", controllers.remove);

export default routes;
