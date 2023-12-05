const { prisma } = require('config\prisma.js');
const bcrypt = require('bcrypt');

//Login Autentikasis
async function authentication(usernameOrEmail, plainPassword) {
    try {
        //Mengecek `usernameOrEmail` adalah username atau email
        const isEmail = usernameOrEmail.includes('@');

        const user = await prisma.user.findFirst({
            where: isEmail ? { email: usernameOrEmail } : { username: usernameOrEmail },
        });

        if (user) {
            const isPasswordMatch = await bcrypt.compare(plainPassword, user.password);

            if (isPasswordMatch) {
                return {success: true, user};
            } else {
                return {success: false, message: 'Masukkan kembali password'};
            }
        } else {
            return {success: false, message: 'User (404) Tidak Ditemukan'};
        }
    } catch (error) {
        console.error('Terjadi kesalahan: ', error);
        return {success: false, message: 'Terjadi kesalahan saat Autentikasi' };
    }
}


module.exports = {
    authentication
}