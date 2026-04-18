let users = [];

exports.getAllUsers = () => {
  return users;
};

exports.createUser = (data) => {
  const newUser = {
    id: Date.now(),
    name: data.name
  };
  users.push(newUser);
  return newUser;
};