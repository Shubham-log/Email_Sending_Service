const User = require("../model/senEmailmodel");
const ErrorHandler = require("../utils/errorhandler");
const asyncerror = require("../middleware/catchAsyncError");
const dotenv = require("dotenv");
const emailToCustomer = require("./emailToCustomer")

const nextservice = require("./emailToCustomer")

dotenv.config({path:"config/config.env"}); //to connect env folder


const mailjet = require('node-mailjet').connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
  )
// process.env.MJ_APIKEY_PUBLIC,
    // process.env.MJ_APIKEY_PRIVATE
exports.sendEmailtoCustomer = (req,res)=>{
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
          },
        ],
      })
      request
        .then(result => {
         return  nextservice(details,res)
        })
        .catch(err => {
          res.sendStatus(404)
        })
    
}
