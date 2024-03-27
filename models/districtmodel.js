import mongoose from "mongoose";

const districtSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        constituency:[{
          name:{
            type:String
          },
          assembly:[{
            name:{
                type:String
            }
        }],
        locals:{
            type:String,
            enum:['panchayath','municipality','corporation'],
        },
        localsname:[{
            type:String,
            required:true
        }]
        }],
        
       
    }
);

const districtmodel = mongoose.model("district", districtSchema);
export default districtmodel;
