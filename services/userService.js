const { prisma } = require('configurations/prisma.js');
const bcrypt = require('bcrypt');

// hash password func
const hashPassword = async (password) => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
};

// POST - CREATE method
const createUser = async(user) => {
    try {
        //hashPassword
        const hashedPassword = await hashPassword(user.password);
        const createduser = prisma.user.create({
            data: {
                id: user.id,
                username: user.username,
                email: user.email,
                password: hashedPassword,
            }
        });
        return createduser;
    } catch (error) {
        console.log(error);
    }
}

// GET - READ method
const getUser = () => {
    try {
        const user = prisma.user.findMany();
        return user;
    } catch (error) {
        console.log(error);
    }
}

//GET User by Id
const getUserById = (userId) => {
    try {
        const user = prisma.user.findunique({
            where: {
                id: Number(userId)
            }
        });
        return user;
    } catch(error) {
        console.log(error);
    }
}

//PATH - UPDATE method
const updateUser = async(user, userId) => {
    try {
        //hash password
        const hashedPassword = await hashPassword(user.password);
        const updatedUser = prisma.user.update({
            where: {
                id: Number(userId)
            },
            data: {
                id: user.id,
                username: user.username,
                email: user.email,
                password: hashedPassword,
            }
        });
        return updatedUser;
    } catch(error) {
        console.log(error);
    }
}

// DELETE method
const deleteUser = (userId) => {
    try {
        const deletedUser = prisma.user.delete({
            where: {
                id: Number(userId)
            }
        })
        return deletedUser;
    } catch(error) {
        console.log(error);
    }
}