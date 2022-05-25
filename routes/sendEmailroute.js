const express = require("express");
const router = express.Router();
const {sendEmailtoCustomer} = require("../controller/sendEmailController");



router.route("/sendEmailtoCustomer").post(sendEmailtoCustomer);

module.exports=router;