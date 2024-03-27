import districtmodel from "../models/districtmodel"


export const addingdata = async (req, res,) => {
    try {
        const {district,constituency,assembly,panchayath}=req.body
        districtmodel.create({
            name:district,
            constituency:constituency,
            assembly:assembly,
            panchayath:panchayath,
    
        }).then((data)=>{
            res.status(200).json({messge:'added success fuly'})
        }).catch((error)=>{
            console.log(error);
        })
    } catch (error) {
        
    }

}
export const addnewConstituency = async(req,res,)=>{
  
    
}
       