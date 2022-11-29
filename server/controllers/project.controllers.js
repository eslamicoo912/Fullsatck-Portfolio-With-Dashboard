import ProjectModel from "../models/project.model.js";

export const create = async (req, res) => {
  try {
    const project = new ProjectModel(req.body);
    project.save();
    res.json(project);
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    res.json(projects);
  } catch (error) {
    console.log(error);
  }
};

export const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const project = await ProjectModel.findById(id);
    res.json(project);
  } catch (error) {
    console.log(error);
  }
};

export const update = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedProject = await ProjectModel.updateOne({ _id: id }, req.body, {
      new: true,
    });
    res.json(updatedProject);
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (req, res) => {
  const id = req.params.id;
  try {
    await ProjectModel.findOneAndDelete({ _id: id });
    res.json({ message: `project ${id} deleted` });
  } catch (error) {
    console.log(error);
  }
};
