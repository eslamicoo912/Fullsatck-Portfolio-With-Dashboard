import mongoose from "mongoose";

const Education = mongoose.Schema({
  start_date: Date,
  end_date: Date,
  school: String,
  degree: String,
  text: String,
});

const EducationModel = mongoose.model("Education", Education);

export default EducationModel;
