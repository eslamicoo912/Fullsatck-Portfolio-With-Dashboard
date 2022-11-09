import mongoose from "mongoose";

const Work = mongoose.Schema({
  start_date: Date,
  end_date: Date,
  company: String,
  position: String,
  text: String,
});

const WorkModel = mongoose.model("WorkModel", Work);

export default WorkModel;
