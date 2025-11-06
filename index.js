import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const PORT= process.env.PORT || 5000 // .env laa irukura port kondu varum
const app=express()

app.listen(PORT,()=>{
    console.log(`server runing on http://localhost:${PORT}`)
    
})

