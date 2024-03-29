const express=require("express")
const app=express();
const dotenv=require('dotenv')
const colors=require("colors")
const morgan=require("morgan")
const cors=require("cors");
const connectDB = require("./config/db");

//dot config
dotenv.config();

//mongodb connection
connectDB();

//middleware
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))




//routes
app.use("/api/v1",require("./routes/testRoutes"))
app.use("/api/v1/auth",require("./routes/authRoutes"))
app.use("/api/v1/inventory",require("./routes/inventoryRoutes"))
app.use("/api/v1/analytics", require("./routes/analyticsRoute"));
// app.use("/api/v1/admin",require("./routes/adminRoutes") )
app.use("/api/v1/admin", require("./routes/adminRoutes"));


//port
const PORT= process.env.PORT || 8080;
 

///listen
app.listen(PORT,()=>{
    console.log(`Node Server In ${process.env.DEV_MODE} Running on PORT ${process.env.PORT} `.bgBlue.white)
})