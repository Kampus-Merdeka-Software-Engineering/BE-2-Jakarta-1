import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    })
})

app.use((err, req, res) => {
    res.status(500).json({
        error: err.message
    })
})