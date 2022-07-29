const express = require("express");
const { getUserProfile, updateUserProfile } = require('../modules/admin/userProfile.js');
const checkUserAuth = require('../modules/authentication/authTokenCheck.js')

const router = express.Router();
//Protected routes
router.get("/getUserProfile", checkUserAuth, getUserProfile)
router.put("/updateUserProfile", checkUserAuth, updateUserProfile)

module.exports = router