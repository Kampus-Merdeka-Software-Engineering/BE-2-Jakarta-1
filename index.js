require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bcrypt = require('bcrypt');
const userRouter = require('routes/userRoute.js');
const loginRouter = require('routes/loginRoute.js');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// user Routes
app.use('/user', userRouter);
// login Routes
app.use('/login', loginRouter);


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
