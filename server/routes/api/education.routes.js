import * as controllers from "../../controllers/education.controllers.js";
import { Router } from "express";

const routes = Router();

routes.post("/educations", controllers.create);
routes.get("/educations", controllers.getAll);
routes.get("/educations/:id", controllers.getOne);
routes.patch("/educations/:id", controllers.update);
routes.delete("/educations/:id", controllers.remove);

export default routes;
