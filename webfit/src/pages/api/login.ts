import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose, { Model } from "mongoose";
import { User } from "./createUser";

const JWT_SECRET = "mysecret"; // Set your JWT secret here

type Data = {
  accessToken?: string;
  error?: string;
};

type UserModelType = Model<User> & {
  // Add any additional methods or properties here
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await mongoose.connect("mongodb://127.0.0.1/Webfit");

  const UserModel: UserModelType =
    mongoose.models["User"] || mongoose.model<User, UserModelType>("User");

  const user = await UserModel.findOne({ email: req.body.email });

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

  res.status(200).json({ accessToken: token });
}
