module.exports= asyncerror =>(req,res,next)=>{
    Promise.resolve(asyncerror(req,res,next)).catch(next);
}