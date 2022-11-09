import * as controllers from "../../controllers/message.controllers.js";
import { Router } from "express";

const routes = Router();

routes.post("/messages", controllers.create);
routes.get("/messages", controllers.getAll);
routes.get("/messages/:id", controllers.getOne);
routes.patch("/messages/:id", controllers.update);
routes.delete("/messages/:id", controllers.remove);

export default routes;
