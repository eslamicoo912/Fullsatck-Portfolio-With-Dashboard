import { Router } from "express";
import ProjectRoutes from "./api/project.routes.js";
import EducationRoutes from "./api/education.routes.js";
import SkillRoutes from "./api/skill.routes.js";
import WorkRoutes from "./api/work.routes.js";
import MessageRoutes from "./api/messgae.routes.js";

const routes = Router();

routes.use("/projects", ProjectRoutes);
routes.use("/skills", SkillRoutes);
routes.use("/educations", EducationRoutes);
routes.use("/works", WorkRoutes);
routes.use("/message", MessageRoutes);

export default routes;
