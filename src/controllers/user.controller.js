const userService = require("../services/user.service");

exports.getUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
};

exports.createUser = (req, res) => {
  const user = userService.createUser(req.body);
  res.status(201).json(user);
};