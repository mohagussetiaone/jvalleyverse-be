const express = require("express");
const { getAllUser } = require("../controller/users");
const { getOneUser } = require("../controller/users");
const { createUser } = require("../controller/users");
const { updateUser } = require("../controller/users");
const { deleteUser } = require("../controller/users");
const router = express.Router();

/* GET users listing. */
router.get("/", getAllUser);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
