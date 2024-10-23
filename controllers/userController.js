const UserStore = require('../models/userModel');

exports.getAllUsers = (req, res) => {
    const users = UserStore.findAll();
    res.status(200).json(users);
};

exports.getUserById = (req, res) => {
    const user = UserStore.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
};

exports.createUser = (req, res) => {
    const newUser = UserStore.create(req.body);
    res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
    const updatedUser = UserStore.update(req.params.id, req.body);
    if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser);
};

exports.deleteUser = (req, res) => {
    const deletedUser = UserStore.delete(req.params.id);
    if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(deletedUser);
};