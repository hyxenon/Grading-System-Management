const express = require('express')

const bodyParser = require('body-parser')

const mongoose = require('mongoose');

require('dotenv').config()


// Routes
const userRoutes = require('./routes/users')
const subjectRoutes = require('./routes/subjects')
const classRoutes = require('./routes/classes')
const loginRoutes = require('./routes/login')
const adminDataRoutes = require('./routes/admindata')
const criteriaRoutes = require('./routes/criteria')

const app = express()

url = process.env.SECRET_KEY

mongoose.connect(url)
    .then(() => {
        console.log('Connected to database!');
    })
    .catch((err)=> {
        console.log('Connection Failed');
    })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
    next()
})


app.use('/api/admin/users', userRoutes);
app.use('/api/admin/subjects', subjectRoutes)
app.use('/api/admin/class', classRoutes)
app.use('/api/login', loginRoutes)
app.use('/api/criteria', criteriaRoutes)
app.use('/api', adminDataRoutes)




module.exports = app