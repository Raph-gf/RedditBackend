import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    pseudo: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    const password = this.password;
    const hashPassword = await bcrypt.hash(password, 10);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = model("User", userSchema);
export default User;
