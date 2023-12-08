const express = require('express');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Login Routes
app.use('/login', loginRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})