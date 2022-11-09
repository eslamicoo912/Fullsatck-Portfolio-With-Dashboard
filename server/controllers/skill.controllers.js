import SkillModel from "../models/skill.model.js";

export const create = async (req, res) => {
  try {
    const skill = new SkillModel(req.body);
    skill.save();
    res.json(skill);
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const skills = await SkillModel.find();
    res.json(skills);
  } catch (error) {
    console.log(error);
  }
};

export const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const skill = await SkillModel.findById(id);
    res.json(skill);
  } catch (error) {
    console.log(error);
  }
};

export const update = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedSkill = await SkillModel.updateOne({ id: id }, req.body, {
      new: true,
    });
    res.json(updatedSkill);
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (req, res) => {
  const id = req.params.id;
  try {
    await SkillModel.findOneAndDelete({ id: id });
    res.json({ message: `skill ${id} deleted` });
  } catch (error) {
    console.log(error);
  }
};
