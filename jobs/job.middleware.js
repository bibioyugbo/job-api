const joi = require("joi")

const CreateJobValidator = async (req,res, next)=>{
    const payload = req.body

try{
    const schema =  joi.object({
        title :joi.string().required(),
        description: joi.string().required(),
        company: joi.string().required(),
        location: joi.string().required(),
        salary: joi.string().required(),
        mode: joi.string().valid('onsite', 'remote', 'hybrid').required(),
        experienceLevel: joi.string().required(),
        expiryDate: joi.date().required(),
        industry: joi.string().required(),
        role: joi.string().required(),

    })
    

    const {error, value} = await schema.validateAsync(payload)
    if(!error){
        next()
    }
} catch(error){
    return res.status(400).json({
        message: "Validation Error",
        error: error.message
    })  

}


}


module.exports={
    CreateJobValidator
}