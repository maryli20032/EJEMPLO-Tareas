const userCtrl ={};
const User = require('../models/user');

userCtrl.getUser = async (req,res) => {
    const users = await User.find();
    res.json(users);
}

userCtrl.createUser = async (req,res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('Usuario guardado');
}
userCtrl.updateUser = async (req, res) => {
    const {username} = req.body;
    await User.findOneAndUpdate({_id: req.params.id}, {
        username: username
    })
    res.json('Usuario modificado');
}
userCtrl.deleteUser = async (req, res) => {
    await User.findOneAndDelete({_id: req.params.id});
    res.json('Usuario eliminado');
}

userCtrl.getOneUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user)

}

module.exports = userCtrl;