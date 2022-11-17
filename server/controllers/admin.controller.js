import dotenv from "dotenv";

dotenv.config();

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.status(200).json({ message: "success_login" });
    }
    res.status(401).json({ message: "fail_login" });
  } catch (error) {
    console.log(error);
  }
};
