const nodemailer = require('nodemailer')
const stmpConfig ={
    service: 'gmail',
    auth:{ user:"mostafaramdan5544@gmail.com", pass:"sqyfypduyhhdrkkf" }
}
const sendActivationEmail = (reciverEmail, textEmail)=>{
    try{
        const transporter = nodemailer.createTransport(stmpConfig)
        let mailOptions = {
            from:"Our Social App",
            to:reciverEmail,
            subject:"Activate your account",
            text:textEmail
        }
        transporter.sendMail(mailOptions)
    }
    catch(e){
        console.log(e)
    }
    
}

module.exports = sendActivationEmail