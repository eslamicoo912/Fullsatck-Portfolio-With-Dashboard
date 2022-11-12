import * as controllers from "../../controllers/about.controllers.js";
import { Router } from "express";

const routes = Router();

routes.post("/", controllers.create);
routes.get("/", controllers.getAll);
routes.patch("/:id", controllers.update);

export default routes;
