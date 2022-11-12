import { Router } from "express";
import ProjectRoutes from "./api/project.routes.js";
import EducationRoutes from "./api/education.routes.js";
import SkillRoutes from "./api/skill.routes.js";
import WorkRoutes from "./api/work.routes.js";
import MessageRoutes from "./api/message.routes.js";
import AboutRoutes from "./api/about.routes.js";
import ContactRoutes from "./api/contact.routes.js";

const routes = Router();

routes.use("/projects", ProjectRoutes);
routes.use("/skills", SkillRoutes);
routes.use("/educations", EducationRoutes);
routes.use("/works", WorkRoutes);
routes.use("/message", MessageRoutes);
routes.use("/about", AboutRoutes);
routes.use("/contact", ContactRoutes);

export default routes;
