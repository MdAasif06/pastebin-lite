const errorHandler=(req,res,err,next)=>{
    console.log(err);
    res.status(500).json({
        error:"Intenal server error"
    })
}
export default errorHandler;