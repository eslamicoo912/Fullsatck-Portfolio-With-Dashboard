import mongoose from "mongoose";

const Messgae = mongoose.Schema({
  name: String,
  email: String,
  text: String,
});

const MessgaeModel = mongoose.model("MessgaeModel", Messgae);

export default MessgaeModel;
