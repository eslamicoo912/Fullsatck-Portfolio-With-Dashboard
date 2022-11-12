import mongoose from "mongoose";

const Contact = mongoose.Schema({
  fullname: String,
  address: String,
  phone: String,
  linkedin: String,
  github: String,
  email: String,
  portfolio: String,
});

const ContactModel = mongoose.model("ContactModel", Contact);
export default ContactModel;
