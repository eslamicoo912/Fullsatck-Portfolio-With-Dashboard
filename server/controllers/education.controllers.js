import EducationModel from "../models/education.model.js";

export const create = async (req, res) => {
  try {
    const education = new EducationModel(req.body);
    education.save();
    res.json(education);
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const educations = await EducationModel.find();
    res.json(educations);
  } catch (error) {
    console.log(error);
  }
};

export const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const education = await EducationModel.findById(id);
    res.json(education);
  } catch (error) {
    console.log(error);
  }
};

export const update = async (req, res) => {
  const id = req.params.id;
  try {
    const updatededucation = await EducationModel.updateOne(
      { id: id },
      req.body,
      {
        new: true,
      }
    );
    res.json(updatededucation);
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (req, res) => {
  const id = req.params.id;
  try {
    await EducationModel.findOneAndDelete({ id: id });
    res.json({ message: `education ${id} deleted` });
  } catch (error) {
    console.log(error);
  }
};
