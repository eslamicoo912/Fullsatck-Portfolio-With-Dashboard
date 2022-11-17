import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import { login } from "./controllers/admin.controller.js";

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// routes
app.use("/api", routes);
app.post("/admin/login", login);

// database connection
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`listening for ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
