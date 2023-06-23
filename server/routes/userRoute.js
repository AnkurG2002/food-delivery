import express from "express";
import { User } from "../models/userModel.js";

const Router = express.Router();

Router.post("/register", async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    res.status(200).send({ message: "Account Created Successfully!🎉" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }

  // const user = new User({
  //   name: req.body.name,
  //   email: req.body.email,
  //   _id: req.body._id,
  // });

  // user.save((err, user) => {
  //   if (err) {
  //     res.status(400).send({ error: err });
  //   } else {
  //     res
  //       .status(200)
  //       .send({ data: user, message: "Account Created Successfully!🎉" });
  //   }
  // });
});

export default Router;
