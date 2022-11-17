import mongoose from "mongoose";

const About = mongoose.Schema({
  img: String,
  text: String,
  position: String,
});

const AboutModel = mongoose.model("AboutModel", About);
export default AboutModel;
