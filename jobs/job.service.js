const Job = require('./job.model');

const CreateJob = async ({
    title,
    description,
    company,
    location,
    salary,
    mode,
    experiencLevel,
    expiredDate

})=>{
    const createJob = await Job.create({
        title,
        description,
        company,
        location,
        salary,
        mode,
        experiencLevel,
        expiredDate
    })
    return createJob;


}


module.exports = {
    CreateJob
}