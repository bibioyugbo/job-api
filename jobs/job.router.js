const express = require('express');
const router = express.Router();
const JobController = require('./job.controller');
const JobMiddleware = require('./job.middleware')

router.post('/',JobMiddleware.CreateJobValidator, JobController.createJobController)
router.get('/', JobController.getAllJobsController);

module.exports = router;