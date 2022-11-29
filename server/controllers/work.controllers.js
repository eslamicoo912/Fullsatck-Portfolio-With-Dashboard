import WorkModel from "../models/work.model.js";

export const create = async (req, res) => {
  try {
    const work = new WorkModel(req.body);
    work.save();
    res.json(work);
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const works = await WorkModel.find();
    res.json(works);
  } catch (error) {
    console.log(error);
  }
};

export const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const work = await WorkModel.findOne({ _id: id });
    res.json(work);
  } catch (error) {
    console.log(error);
  }
};

export const update = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedwork = await WorkModel.updateOne({ _id: id }, req.body, {
      new: true,
    });
    res.json(updatedwork);
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (req, res) => {
  const id = req.params.id;
  try {
    await WorkModel.findOneAndDelete({ _id: id });
    res.json({ message: `work ${id} deleted` });
  } catch (error) {
    console.log(error);
  }
};
