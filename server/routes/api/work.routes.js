import * as controllers from "../../controllers/work.controllers.js";
import { Router } from "express";

const routes = Router();

routes.post("/works", controllers.create);
routes.get("/works", controllers.getAll);
routes.get("/works/:id", controllers.getOne);
routes.patch("/works/:id", controllers.update);
routes.delete("/works/:id", controllers.remove);

export default routes;
