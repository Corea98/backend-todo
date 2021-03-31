if (process.env.NODE_ENV !== 'Production') require('dotenv').config()
const express = require('express')
const cors = require('cors')

const config = require('./config')

const app = express()

// Routes
const task = require('./components/task/network')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/task', task)

app.listen(config.api.port, () => {
    console.log('Running on port', config.api.port)
})