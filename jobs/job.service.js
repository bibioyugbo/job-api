const Job = require('./job.model');

const CreateJob = async ({
    title,
    description,
    company,
    location,
    salary,
    mode,
    experienceLevel,
    expiryDate,
    industry,
    role
})=>{
    const createJob = await Job.create({
        title,
        description,
        company,
        location,
        salary,
        mode,
        experienceLevel,
        expiryDate,
        industry,
        role,
        // status:'pending',
    })
    return createJob;


}

const GetAllJobs = async ({location, status, mode})=>{
    const query={}
    if (location) {
        query.location = location;
    }
    if (status) {
        query.status = status;
    }
    if (mode) {
        query.mode = mode;
    }
    const getAllJobs = await Job.find(query);
    return getAllJobs
}


module.exports = {
    CreateJob,
    GetAllJobs
}