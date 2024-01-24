const userModel = require("../models/userModel")
const  bcrypt= require("bcryptjs")
const jwt=require("jsonwebtoken")
const { use } = require("../routes/testRoutes")
//REGISTER CONTROLLER
const registerController = async (req, res) => {
    try {
        console.log("Request Body:", req.body);
      const exisitingUser = await userModel.findOne({ email: req.body.email });

      if (!req.body.phone) {
        return res.status(400).json({
          success: false,
          message: "Fill the details",
        });
      }
      //validation

      if (exisitingUser) {
        return res.status(200).send({
          success: false,
          message: "User ALready exists",
        });
      }
      //hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashedPassword;
      //rest data
      const user = new userModel(req.body);
      
      await user.save();
      return res.status(201).send({
        success: true,
        message: "User Registerd Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error In Register API",
        error,
      });
    }
  };
  
  
//LOGIN CONTROLLER
const loginController=async(req,res)=>{
    try{

        const user=await userModel.findOne({email:req.body.email})
        if(!user){    //agr email already registered nhi hai to invalid
            return res.status(404).send({
                success:false,
                message:"Invalid Credentials"
            })
        }
        //chech role
        if(user.role!== req.body.role){
            return res.status(500).send({
                success:false,
                message:"Role does Not Match"
            })
        }
        //compare password
        const comparePassword=await bcrypt.compare(req.body.password,user.password)
        if(!comparePassword){ //agr email valid h but password aur decrypted pass compare nhi hore to bhi invalid 
            return res.status(500).send({
                success:false,
                message:"Invalid Credentials"
            })
        }
        const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})  //agr dono match krjaye to valid  ,token to encrypt kia tha,token create kia tha
        return res.status(200).send({
            success:true,
            message:"Login Successfully",
            token,
            user
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Login API",
            error
        })
    }

}

//GET CURRENT USER CONTROLLER
const currentUserController = async(req,res)=>{
    try{
        const user=await userModel.findOne({_id:req.body.userId})
        return res.status(200).send({
            success: true,
            message: "User Fetched Successfully",
            user,
          });

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Unable to get current user",
            error
        })

    }
}

module.exports={registerController,loginController,currentUserController}