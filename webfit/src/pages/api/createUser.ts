import type { NextApiRequest, NextApiResponse } from "next";

import mongoose, { Document, Model, Schema, model } from "mongoose";

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birth: Date;
  phoneNumber: number;
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birth: { type: Date, required: true },
  phoneNumber: { type: Number, required: true },
});

interface UserModel extends Model<User> {
  // Add any additional methods or properties here
}

export const UserModel: UserModel =
  mongoose.models["User"] ||
  mongoose.model<User, UserModel>("User", userSchema);

type Data = {
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  birth: Date;
  phoneNumber: number;
};

export async function createUserhandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Webfit");

    const user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birth: req.body.birth,
      phoneNumber: req.body.phoneNumber,
    });

    await user.save();

    res.status(200).json({
      name: user.name,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      birth: user.birth,
      phoneNumber: user.phoneNumber,
    });
  } catch (error) {
    console.log("erorror internal");
  }
}
