import ContactModel from "../models/contact.model.js";

export const create = async (req, res) => {
  try {
    const Contact = new ContactModel(req.body);
    Contact.save();
    res.json(Contact);
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

export const update = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedContact = await ContactModel.updateOne({ id: id }, req.body, {
      new: true,
    });
    res.json(updatedContact);
  } catch (error) {
    console.log(error);
  }
};
