import MessgaeModel from "../models/message.model.js";

export const create = async (req, res) => {
  try {
    const message = new MessgaeModel(req.body);
    message.save();
    res.json(message);
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const messages = await MessgaeModel.find();
    res.json(messages);
  } catch (error) {
    console.log(error);
  }
};

export const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const message = await MessgaeModel.findById(id);
    res.json(message);
  } catch (error) {
    console.log(error);
  }
};

export const update = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedmessage = await MessgaeModel.updateOne({ id: id }, req.body, {
      new: true,
    });
    res.json(updatedmessage);
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (req, res) => {
  const id = req.params.id;
  try {
    await MessgaeModel.findOneAndDelete({ id: id });
    res.json({ message: `message ${id} deleted` });
  } catch (error) {
    console.log(error);
  }
};
