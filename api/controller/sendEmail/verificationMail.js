const nodeMailer = require('nodemailer');
const fs = require('fs');
const handlebar = require('handlebars');
const transporter = nodeMailer.createTransport({
    service:"gmail",
    auth:{
        user:"nkwuda2@gmail.com",
        pass: "uepzdxnqzuozgrfq"
    }
});

const iniateMailsending = (recipientMail,link,otp) => {
    fs.readFile(__dirname+'/templates/verification.html', "utf8", (error, data) => {
        if (error) throw error;
        let template = handlebar.compile(data);
        const replacement = {
            link:link,
            OTP:otp
        };
        template = template(replacement);
        transporter.sendMail({
            to:recipientMail,
            subject: "Email verification",
            html:template
        }, (err,info) => {
            if(err) throw err;
            console.log(info.response);
        })
    })
} 

module.exports = iniateMailsending;
// iniateMailsending('theophilusonyebuchinkwuda@gmail.com','www.google.com');