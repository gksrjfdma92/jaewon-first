const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

const config = require('./config/key')

const mongoose = require('mongoose')

// bodyParser는 클라이언트에서 오는 정보를 서버에서 분석할 수 있게 바꿔주는 기능

// application/x-www-form-urlencoded 타입을 분석해서 가져올 수 있게 해주는 기능
app.use(bodyParser.urlencoded({extended:true}));

// application/json 타입을 분석해서 가져올 수 있개 해줌
app.use(bodyParser.json())


mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World! ~~~~~'))

app.post('/register', (req, res) =>{

    // 회원가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터베이스에 넣어준다.

    

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success:true
        })
    })



} )

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))