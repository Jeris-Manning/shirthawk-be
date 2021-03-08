const router = require("express").Router();
import { hashSync, compareSync } from "bcryptjs";
import { sign } from "jsonwebtoken";

import Models from "../crudOperations/helperVariables/models";

router.post("/register", async (req, res) => {
  try {
    let newUser = req.body;
    const hash = hashSync(newUser.password, 12);
    newUser.password = hash;

    let returnTables = ["id", "username", "email"];

    let addedUser = await Models.addEntry("users", newUser, returnTables);

    res.status(201).json(addedUser);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Username Must be Unique, please choose another"
    });
  }
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Models.Users.findByUsername(username)
    .first()
    .then(user => {
      if (user && compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch(error => {
      // console.log(error);
      res
        .status(500)
        .json({ error, message: "There was an error logging you in" });
    });
});

function generateToken(user) {
  const payload = {
    subject: user.userID,
    username: user.username
  };

  const options = {
    expiresIn: "7d"
  };

  return sign(payload, process.env.JWT_SECRET, options);
}

export default router;
