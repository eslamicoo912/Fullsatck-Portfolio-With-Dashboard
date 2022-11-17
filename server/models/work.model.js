import mongoose from "mongoose";

const Work = mongoose.Schema({
  start_date: String,
  end_date: String,
  company: String,
  position: String,
  text: String,
});

const WorkModel = mongoose.model("WorkModel", Work);

export default WorkModel;
