const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    //impement code
    const data= {
        success: true,
        message:"Backend is running well"
    }
    return res.send(data)
})

app.listen(8080, ()=>{
    console.log('App listening on port 8080')
})