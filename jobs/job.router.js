const express = require('express');
const router = express.Router();
const JobController = require('./job.controller');

router.post('/', JobController.createJobController)

module.exports = router;