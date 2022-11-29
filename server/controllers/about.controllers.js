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
  try {
    const updatedAbout = await AboutModel.updateOne(
      { _id: "636f61f526b1fdc21411b82f" },
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedAbout);
  } catch (error) {
    console.log(error);
  }
};
