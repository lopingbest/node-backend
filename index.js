const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//middleware express
app.use(bodyParser.urlencoded({extended:false}))


app.get('/',(req,res)=>{
    //impement code
    const data= {
        success: true,
        message:"Backend is running well and started nodemon"
    }
    return res.send(data)
})

app.post('/profile',(req,res)=>{
    console.log(req.body)
    return res.send({
        success: true,
        message: 'Data has ben seend'   
    })
})

app.post('/login',(req,res)=>{
    // const email = req.body.email
    // const password = req.body.password
    const {email, password} = req.body
    if(email==="admin@server.com" && password === "1234"){
        return res.send({
            success: true,
            message: "Login Successfully"
        })
    } else {
        return res.send({
            success: false,
            message: "Wrong email or password"
        })
    }
})

app.listen(8080, ()=>{
    console.log('App listening on port 8080')
})