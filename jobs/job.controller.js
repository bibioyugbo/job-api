const JobService = require('./job.service')


const createJobController = async (req,res)=>{
    const payload = req.body;
    const response = await JobService.CreateJob({
        title: payload.title,
        description: payload.description,
        company: payload.company,
        location: payload.location,
        salary: payload.salary,
        mode: payload.mode,
        experiencLevel: payload.experiencLevel,
        expiredDate: payload.expiredDate
    })
    if (response){

    }
    res.send('Job created successfully');
}


module.exports = {
    createJobController
}