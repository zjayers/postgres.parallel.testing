const express = require("express");
const UserRepository = require("../repositories/userRepository");

const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await UserRepository.find();
  res.send(users);
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  const user = await UserRepository.findById(id);

  if (!user) return res.sendStatus(404);

  res.send(user);
});

router.post("/users", async (req, res) => {
  const { username, bio } = req.body;

  const user = await UserRepository.insert(username, bio);

  res.send(user);
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { username, bio } = req.body;

  const user = await UserRepository.update(id, username, bio);

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  const user = await UserRepository.delete(id);

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});
module.exports = router;
