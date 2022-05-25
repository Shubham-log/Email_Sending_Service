const app =require("./src/app");
const dotenv = require("dotenv");



// // Handling Uncought Exception
// process.on("uncaughtException",(err)=>{
//     console.log(`Error: ${err.message}`);
//     console.log("Shutting Down The Server due to  Uncought Exception");
//     process.exit(1);
// })



//config
dotenv.config({path:"config/config.env"}); //to connect env folder

// connection to database
// connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`Serever is On http://localhost:${process.env.PORT}`)
})



// // Unhandled Promisse Rejection when problem in DB
// process.on("unhandledRejection",err=>{
//     console.log(`Error: ${err.message}`);
//     console.log("Shutting Down The Server due to Unhandled Promisse Rejection");
//     server.close(()=>{

//         process.exit(1);
//     });
// });