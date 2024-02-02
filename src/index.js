import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "dotenv/config";
import userRouter from "./routes/userRoute";
import postRouter from "./routes/postRoute";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("[SERVER] Database 🔫 connection established !!!");
}

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Yoooooo 🔥 !");
});
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/login", userRouter);

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
