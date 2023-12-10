<<<<<<< HEAD
const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

const establishConnection = require('./configurations/config')

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
=======
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();
const app = express();
const port = 3000;
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(session( {
    secret: '54321',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// Login Routes
passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = wait prisma.customers.findUnique({
                where: {
                    username: username
                }
            });

            console.log('Input Password:', password);
            console.log('User', user);

            if (!user) {
                console.log('Incorrect username.');
                return done(null, false, { message: 'Incorrect username.' });
            }

            const isPasswordValid = password === user.password;

            console.log('Is password valid:', isPasswordvalid);

            if (!isPasswordValid) {
                console.log('Incorrect password.');
                return done(null, false, { message: 'Incorrect password.' });
            }

            console.log('Login successful.');
            // Mengirim pesan ke console dan menyimpan pesan serta username ke localStorage
            done(null, { message: 'Login successful.', username: user.username });
        } catch (err) {
            console.error('Error in Passport LocalStrategy:', err);
            return done(err);
        }
    }
));

app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error('Error during authentication:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        if (!user) {
            console.log('Authentication failed:', info.message);
            // Mengirim pesan ke console dan menyimpan pesan ke localStorage
            return res.status(401).json({ message: info,message });
        }

        // Jika autentikasi berhasil
        console.log('Authentication successful.');
        // Mengirim pesan ke console dan menyimpan pesan serta username ke localStorage
        res.status(200).json({ message: 'Login successful.', username: user.username });
    })(req, res, next);
});

// Panggil Respon
const response = require('./response.js');
app.get('/', (req, res) => {
    const data = {

    }
    response(200, data, "Request successful", res);
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
>>>>>>> ff2d5242aea191aa771649c42576552ab225ae80
