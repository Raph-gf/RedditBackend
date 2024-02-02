import { Router } from "express";
import {
  createPost,
  deletePost,
  findOnePost,
  getAllPosts,
} from "../controllers/postController";

const postRouter = Router();

postRouter.post("/createPost", createPost);
postRouter.get("/allPosts", getAllPosts);
postRouter.put("/:id", findOnePost);
postRouter.delete("/:id/deletePost", deletePost);

export default postRouter;
