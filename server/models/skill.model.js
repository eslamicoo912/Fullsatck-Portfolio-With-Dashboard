import mongoose from "mongoose";

const Skill = mongoose.Schema({
  title: String,
  tetx: String,
});

const SkillModel = mongoose.model("SkillModel", Skill);

export default SkillModel;
