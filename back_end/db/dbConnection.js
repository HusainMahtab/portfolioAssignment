import mongoose from "mongoose"

const dbConnection=()=>{
   try {
    mongoose.connect(process.env.MONGODBCONNECTIONURI)
    console.log("db connected succeefully")
   } catch (error) {
      console.error("db not connected",error)
   }
}

export default dbConnection