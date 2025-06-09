const JobService = require('./job.service')


const createJobController = async (req,res)=>{
    try{
        const payload = req.body;
        console.log('Payload:', {payload});
    
        const response = await JobService.CreateJob({
            title: payload.title,
            description: payload.description,
            company: payload.company,
            location: payload.location,
            salary: payload.salary,
            mode: payload.mode,
            experienceLevel: payload.experienceLevel,
            expiryDate: payload.expiryDate,
            industry: payload.industry,
            role: payload.role,
        })
        if (response){
            return res.status(201).json({
                message: 'Job created successfully',
                data: response
            })
        }
    }catch (error) {
        return res.status(500).json({
            message:" Internal Server Error",
            error: error.message
        })

    }
  
}

const getAllJobsController= async (req, res)=>{
    
    try {
        const {location, status, mode} = req.query;
        console.log('Request Query:', {location});
        const response = await JobService.GetAllJobs({
            location,
            mode,
            status
        });
        if (response) {
            return res.status(200).json({
                message: 'Jobs fetched successfully',
                data: response
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }   
}


module.exports = {
    createJobController,
    getAllJobsController
}