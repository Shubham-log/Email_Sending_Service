const dotenv = require("dotenv");

dotenv.config({path:"config/config.env"});

const mailjet = require('node-mailjet').connect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
    )

emailToCustomer= (req,res)=>{

  console.log(Object.keys[res])
    // const request = mailjet.post('send', { version: 'v3.1' }).request({
    //     Messages: [
    //       {
    //         From: {
    //           Email: 'brettalex174@gmail.com',
    //           Name: 'Reply Department',
    //         },
    //         To: [
    //           {
    //             Email: 'shubham5.logistics@gmail.com',
    //             Name: 'Shubham Sharma',
    //           },
    //         ],
    //         Subject: "demo",
    //         TextPart: "demo",
    //         HTMLPart:
    //           '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
    //       },
    //     ],
    //   })
    //   request
    //     .then(result => {
    //       res.send(220);
    //     })
    //     .catch(err => {
    //       res.send(223);
    //     })
     
}

module.exports=emailToCustomer;

