const dotenv = require("dotenv");

dotenv.config({path:"config/config.env"});

// e7cca9b2eba2383a57509b5402bdc1ce

const mailjet = require('node-mailjet').connect(
    "23b358226bfd92dd0a2db33ae9c8f521",
    "eb07c5ce4f1ec946731f0faebdc70d32"
    )

nextservice= (req,res)=>{

    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: 'shubham5.logistics@outlook.com',
              Name: 'Shubham Sharma',
            },
            To: [
              {
                Email: req.email,
                Name: req.name,
              },
            ],
            Subject: "Reply Department Shubham's Team !!",
            TextPart: "",
            HTMLPart:
              '<h3>THANK YOU !! FOR CONTACTING US WE WILL GET BACK TO YOU IN DUE COURSE OF TIME CHECK OUT SOME OF WORKS HERE<a href="https://shubhams-portfolio.netlify.app/"></a>!</h3>',
          },
        ],
      })
      request
        .then(result => {
          return res.sendStatus(200);
        })
        .catch(err => {
          return res.sendStatus(223);
        })
     
}

module.exports=nextservice;

