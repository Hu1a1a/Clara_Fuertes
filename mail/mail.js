const nodemailer = require('nodemailer');

const config = {
    host: "smtp.ionos.es",
    secure: false,
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
}
module.exports = { nodemailer, config }