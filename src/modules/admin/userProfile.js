const userModel = require("../../db/models/registerSchema.js");

const getUserProfile = async (req, res) => {
  const user = await userModel.findById(req.user._id);
  if (user) {
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      image:user.image
    });
  } else {
    res.status(404).send({
      data: {},
      error: {
        message: "user is not found",
      },
    });
  }
};

const updateUserProfile = async (req, res) => {
    try {
        const { name, email,image } = req.body;
        await userModel.findByIdAndUpdate(req.user._id, {
         $set: { name: name, email: email,image:image },
       });
       const updateUser = await userModel.findById(req.user._id);
       res.send({
         name: updateUser.name,
         email: updateUser.email,
         image:updateUser.image
       });
    } catch (error) {
        console.log(error)
    }
 
};

module.exports = { getUserProfile, updateUserProfile };
