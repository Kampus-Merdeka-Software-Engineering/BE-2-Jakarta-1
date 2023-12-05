import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const express = require('express');
const app = express();
const port = process.env.port || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    })
})



// Login Routes
app.use('/login', loginRouter);


app.listen(port, () => {
    console.log(`Server running on port: ${PORT}`);
})