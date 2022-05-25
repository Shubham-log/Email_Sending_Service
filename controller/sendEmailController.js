const User = require("../model/senEmailmodel");
const ErrorHandler = require("../utils/errorhandler");
const asyncerror = require("../middleware/catchAsyncError");
const dotenv = require("dotenv");
const emailToCustomer = require("./emailToCustomer")


dotenv.config({path:"config/config.env"}); //to connect env folder


const mailjet = require('node-mailjet').connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
  )
// process.env.MJ_APIKEY_PUBLIC,
    // process.env.MJ_APIKEY_PRIVATE
exports.sendEmailtoCustomer = (req,res,emailToCustomer)=>{
    const details={
      ...req.body
    }
    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: 'brettalex174@gmail.com',
              Name: 'Query Department',
            },
            To: [
              {
                Email: 'shubham5.logistics@gmail.com',
                Name: 'Shubham Sharma',
              },
            ],
            Subject: details.subject,
            TextPart: details.message,
            HTMLPart:
              '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
          },
        ],
      })
      request
        .then(result => {
          // emailToCustomer(detalis,res);
          res.sendStatus(200)
        })
        .catch(err => {
          res.sendStatus(404)
        })

}