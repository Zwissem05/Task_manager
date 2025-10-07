import express from 'express'
import  {Register}  from './Controllers/UserController.js'
const app=express()
const PORT=3500
app.use(express.json())
app.post('/',Register)

app.listen(PORT,() => {
    console.log(`server is runnig up on ${PORT}`)
})