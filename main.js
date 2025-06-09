const express = require('express')
const app = express()
const dotenv = require('dotenv')
const database = require('./config/database');
const jobsRouter = require('./jobs/job.router')

dotenv.config()
const port =process.env.PORT||3000
app.use(express.json());

database.connectDB();

app.get('/',(req,res)=>{
    res.send('Jobs Apis')
})
app.get('/health', (req,res)=>{
    res.send('OK')
})

app.listen(port, ()=>{
    console.log('Server started on port 3000')
})


app.use('/api/v1/jobs', jobsRouter)