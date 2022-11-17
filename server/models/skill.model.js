import mongoose from "mongoose";

const Skill = mongoose.Schema({
  skills: [Object],
});

const SkillModel = mongoose.model("SkillModel", Skill);

export default SkillModel;
