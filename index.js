const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000

// Routes
const task = require('./components/task/network')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/task', task)

app.listen(PORT, () => {
    console.log('Running on port', PORT)
})