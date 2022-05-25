// const mongoose = require("mongoose");
// // const { stringify } = require("nodemon/lib/utils");

// const productSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:[true,"Please Enter Product Name"],// if we dnot give at time of creation then string value come it place 
//         trime:true
//     },
//     description:{
//         type:String,
//         required:[true,"Please Enter Product Description"]
//     },
//     price:{
//         type:Number,
//         required:true,
//         maxlength:[8] // 8 figure price
//     },
//     rating:{
//         type:Number,
//         default:0
//     },
//     images:[
//         {
//             public_id:{
//                 type:String,
//                 required:true
//             },
//             url:{
//                 type:String,
//                 required:true
//             }
    
//         }
//     ],
//     category:{
//         type:String,
//         required:[true,"Please Enter Product Category"],
//     },
//     stock:{
//         type:String,
//         required:[true,"Please Enter Product Stock"],
//         maxlength:[4,"Stock cannot Exceed 4 Character"],
//         default:0 // default value if someone skip to enter value
//     },
//     numofReviews:{
//             type:Number,
//             default:0 
//     },
//     reviews:[{
//         name:{
//             type:String,
//             required:true,
//         },
//         rating:{
//             type:Number,
//             required:true,
//         },
//         comment:
//         {
//             type:String,
//             required:true

//         }
//     }],
//     createdAt:{
//         type:Date,
//         default:Date.now
//     }
// })


// module.exports = mongoose.model("Product",productSchema);