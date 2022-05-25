const express = require("express");
const app =express();

// const errorMiddleware = require("./middleware/error");
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
  
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// app.use( express.urlencoded());


// Routes Import
const email =require("../routes/sendEmailroute");


// api/emailservice  is string wich always add in query 
// app.get("/",(req,res)=>{
//     res.send("working");
// })

app.use("/api/emailservice",email);


// // middleware for Error
// app.use(errorMiddleware);

module.exports = app

