import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    pseudo: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);
export default Post;
