const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    role: {
        type: String,
        required: [true, "role is required"],
        enum: ["admin", "organisation", "donar", "hospital"], //to check whether it is user,admin,donor,organisation
      },
      name: {
        type: String,
        required: function () {
          if (this.role === "donar" || this.role === "admin") { //if(user or admin then only name is required )
            return true;
          }
          return false;
        },
      },

      organisationName: {
        type: String,
        required: function () {
          if (this.role === "organisation") { //check whether organisation or not
            return true;
          }
          return false;
        },
      },
      hospitalName: {
        type: String,
        required: function () {
          if (this.role === "hospital") {  //check if its hospital
            return true;
          }
          return false;
        },
      },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'pass required']
    },
    address: {
        type: String,
        required: [true, "address is required"],
      },
      phone: {
        type: String,
        required: [true, "phone number is required"],
      },
      website: {
        type: String,
      }
},
{timestamps:true}//jb bhi new user create hoga  uska timestamp rhega

) 

module.exports=mongoose.model('user',userSchema)