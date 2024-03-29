const mongoose=require("mongoose")

const inventorySchema = new mongoose.Schema(
    {
      inventoryType: {
        type: String,
        required: [true, "inventory type required"],
        enum: ["in", "out"],
      },
      bloodGroup: {
        type: String,
        required: [true, "blood group is required"],
        enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
      },
      quantity: {
        type: Number,
        require: [true, "blood quanity is required"],
      },
      
    email: {
        type: String,
        required: [true, "Donar Email is Required"],
      },
      organisation: {
        type: mongoose.Schema.Types.ObjectId, //relational
        ref: "user", //kaha se get krna h
        required: [true, "organisation is required"],
      },
      hospital: {
        type: mongoose.Schema.Types.ObjectId,   ///type: mongoose.Schema.Types.ObjectId This specifies that the hospital field will store MongoDB ObjectIds. ObjectIds are unique identifiers automatically generated by MongoDB for each document.
        ref: "user",  //The ref option establishes a reference to another Mongoose model. In this case, it's referencing the "users" model. It implies that the hospital field will contain ObjectIds that correspond to documents in the "users" collection.
        required: function () {                           
          return this.inventoryType === "out";  //jb inventory type out hoga tb hum hospital ko blood denge 
        },
      },
      donar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: function () {
          return this.inventoryType === "in";   //jb kisi donar ko blood donate krna hai to type in hogi
        },
      },
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Inventory", inventorySchema);