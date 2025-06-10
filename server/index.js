import express from 'express'
import connectDB from './config/connectDB.js'
import userRouter from './route/user.route.js'


const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000

app.get("/",(request,response)=>{
    ///server to client
    response.json({
        message : "Server is running " + PORT
    })
})

app.use('/api/user',userRouter)

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server is running",PORT)
    })
})

