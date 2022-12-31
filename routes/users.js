import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";

const users = [];

router.get("/", (req, res) => {
  console.log("get user", users);
  res.send(users);
});

router.post("/", (req, res) => {
  const newUser = req.body;

  const userID = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  users.push({ ...newUser, id: userID });
  console.log(newUser);
  res.send(`${newUser.firname} added todb`);
  console.log("users", users);
});

export default router;
