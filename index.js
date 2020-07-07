const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://jwpractice1:0903221992@jwcluster0.dgcnc.mongodb.net/jwdb1?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))