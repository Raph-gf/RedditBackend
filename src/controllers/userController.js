import User from "../models/userModel";
import "dotenv/config";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
  try {
    const { pseudo } = req.body;
    const { email } = req.body;
    const existingUser = await User.findOne({ pseudo });
    const existingEmail = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Pseudo already exists" });
    }
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }
    let newUser = await User.create(req.body);
    console.log(newUser.pseudo);
    console.log(newUser);

    res.json({ message: "User created successfully", newUser });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const findAllUsers = async (req, res) => {
  try {
    let findAllUsers = await User.find();
    console.log(findAllUsers.pseudo);
    console.log(findAllUsers);
    res.json({ message: "User found successfully", findAllUsers });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const findOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    let findUser = await User.findById({ _id: id });
    console.log(findUser.pseudo);
    console.log(findUser);
    res.json({ message: "User found successfully", findUser });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, pseudo, email } = req.body;
  try {
    let updateUser = await User.findByIdAndUpdate(
      { _id: id },
      { firstname, lastname, pseudo, email },
      { new: true }
    );
    if (!updateUser) {
      res.status(404).json({ error: "User not found" });
    }
    console.log(updateUser.pseudo);
    console.log(updateUser);
    updateUser.save();
    res.json({ message: "User updated successfully", updateUser });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    let deleteUser = await User.findOneAndDelete({ _id: id });
    console.log(deleteUser.pseudo);
    console.log(deleteUser);
    res.json({ message: "User deleted successfully", deleteUser });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      console.log({ user, token });
      res.json({ user, token });
    } else {
      res
        .status(401)
        .json({
          error: "Vos identifiants ou votre mot de passe sont invalides",
        });
    }
  } catch (error) {
    res.status(500).json({ error: "Aïe Aïe Aïe, veuillez réessayer" });
  }
};
