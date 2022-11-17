import mongoose from "mongoose";

const Project = mongoose.Schema({
  img: String,
  title: String,
  text: String,
  stack: [Object],
  github: String,
  live: String,
});

const ProjectModel = mongoose.model("ProjectModel", Project);

export default ProjectModel;
