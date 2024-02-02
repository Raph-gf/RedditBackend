import { Router } from "express";
import {
  createUser,
  deleteUser,
  findAllUsers,
  findOneUser,
  login,
  updateUser,
} from "../controllers/userController";

const userRouter = Router();

userRouter.post("/createUser", createUser);
userRouter.get("/all-Users", findAllUsers);
userRouter.get("/:id", findOneUser);
userRouter.put("/:id/updateUser", updateUser);
userRouter.delete("/:id/deleteUser", deleteUser);
userRouter.post("/login", login);

export default userRouter;
