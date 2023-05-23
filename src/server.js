import express from 'express'
import dotenv from "dotenv"
import todoRoutes from './routes/TodoRoutes.js'
// import bodyParser from 'body-parser'
// const express=require("express")
dotenv.config()
const app=express()
// app.use(bodyParser.json());//It parses incoming requests with JSON payloads 
app.use(express.json());// It parses incoming requests with JSON payloads and is based on body-parser
//all routes start from /todo now
app.use('/todos',todoRoutes)

app.get("/",(req,res)=>{
    res.send(`<h1>hello world</h1>`)
    console.log("[TEST:1]!")
})
app.get("/test/:name",(req,res)=>{
    res.send(`<h1>hello ${req.params.name} ,welcome to the world</h1>`)
})


const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}/test/izaan`)
    console.log(`Server Running on http://localhost:${PORT}/todos`)
})