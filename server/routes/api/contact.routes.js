import * as controllers from "../../controllers/contact.controllers.js";
import { Router } from "express";

const routes = Router();

routes.post("/", controllers.create);
routes.get("/", controllers.getAll);
routes.patch("/", controllers.update);

export default routes;
