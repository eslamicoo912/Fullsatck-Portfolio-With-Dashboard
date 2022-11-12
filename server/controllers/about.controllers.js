import AboutModel from "../models/about.model.js";

export const create = async (req, res) => {
  try {
    const About = new AboutModel(req.body);
    About.save();
    res.json(About);
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const Abouts = await AboutModel.find();
    res.json(Abouts);
  } catch (error) {
    console.log(error);
  }
};

export const update = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedAbout = await AboutModel.updateOne({ id: id }, req.body, {
      new: true,
    });
    res.json(updatedAbout);
  } catch (error) {
    console.log(error);
  }
};
