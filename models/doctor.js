import mongoose from "mongoose";

const doctorSchema= new mongoose.Schema({

      id: {
        type: String
        
      },
      email: {
        type: String,
        required : true,
      },
    
      username: {
        type: String,
        required: true,
      },
      
      contact:{
          type:String,
      },
      document:{
        data: Buffer, 
        contentType: String,
      },
      experience:{
        type:String,
        default:"specialist"
      },
      speciality:{
        type:String,
        default:"dietician"
      },
      password:{
        type : String,
        required : true
      },
      language :{
        type : String,
        default:"english"
      },
      appoinments :[{
        name : String,
        contact : String,
        msg :String
      }]
    },
    { timestamps: true }


)

export default mongoose.model("Doctor", doctorSchema);
