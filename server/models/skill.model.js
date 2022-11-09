import mongoose from "mongoose";

const Skill = mongoose.Schema({
  title: String,
  text: String,
});

const SkillModel = mongoose.model("SkillModel", Skill);

export default SkillModel;
