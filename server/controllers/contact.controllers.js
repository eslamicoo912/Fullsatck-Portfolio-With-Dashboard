import ContactModel from "../models/contact.model.js";

export const create = async (req, res) => {
  try {
    const contact = new ContactModel(req.body);
    contact.save();
    res.json(contact);
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const Contacts = await ContactModel.find();
    res.json(Contacts);
  } catch (error) {
    console.log(error);
  }
};

export const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const contact = await ContactModel.findById(id);
    res.json(contact);
  } catch (error) {
    console.log(error);
  }
};

export const update = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedContact = await ContactModel.updateOne({ _id: id }, req.body, {
      new: true,
    });
    res.json(updatedContact);
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (req, res) => {
  const id = req.params.id;
  try {
    await ContactModel.deleteOne({ _id: id });
    res.json({ message: `${id} deleted` });
  } catch (error) {
    console.log(error);
  }
};
