import Post from "../models/postModel";

export const createPost = async (req, res) => {
  try {
    let newPost = await Post.create(req.body);
    console.log(newPost);
    res.json({ message: "Post created successfully", newPost });
  } catch (error) {
    res.status(505).json({ message: "Error creating post", error });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    let allPosts = await Post.find();
    console.log(allPosts);
    res.json({ message: "Posts found", allPosts });
  } catch (error) {
    res.status(500).json({ message: "Error finding all posts", error });
  }
};
export const findOnePost = async (req, res) => {
  const { id } = req.params;
  try {
    let findPost = await Post.findById({ _id: id });
    console.log(findPost.pseudo);
    console.log(findPost);
    res.json({ message: "Post found successfully", findPost });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    let deletePost = await Post.findOneAndDelete({ _id: id });
    console.log(deletePost.pseudo);
    console.log(deletePost);
    res.json({ message: "Post deleted successfully", deletePost });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
