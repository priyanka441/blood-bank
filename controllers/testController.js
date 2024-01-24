const testController=(req,res)=>{   //call bacck func
   res.status(200).send({
    message:"test route",
    success:true
   });
};

module.exports={testController};