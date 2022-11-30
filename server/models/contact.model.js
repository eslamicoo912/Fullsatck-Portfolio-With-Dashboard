import mongoose from "mongoose";

const Contact = mongoose.Schema({
  contact: String,
});

const ContactModel = mongoose.model("ContactModel", Contact);
export default ContactModel;
