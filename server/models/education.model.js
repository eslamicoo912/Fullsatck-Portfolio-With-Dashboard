import mongoose from "mongoose";

const Education = mongoose.Schema({
  start_date: String,
  end_date: String,
  school: String,
  degree: String,
  text: String,
});

const EducationModel = mongoose.model("Education", Education);

export default EducationModel;
