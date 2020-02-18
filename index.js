let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');
let cors = require('cors');
const creds = require('./config');
const auth = require('./auth')
const smtpTransport = require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport(smtpTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        type: 'OAuth2',
        user: creds.USER,
        pass: creds.PASS,
        clientId: auth.CLIENT_ID,
        clientSecret: auth.CLIENT_SECRET,
        refreshToken: auth.REFRESH_TOKEN,
        accessToken: auth.ACCESS_TOKEN
    }
}));

transporter.set('oauth2_provision_cb', (user, renew, callback) => {
    let accessToken = auth.ACCESS_TOKEN;
    if(!accessToken){
        return callback(new Error('Unknown user'));
    }else{
        return callback(null, accessToken);
    }
});


transporter.verify((error, success) => {
    console.log('VERIFYING');
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    const name = req.body.firstName
    const email = req.body.email
    const message = req.body.message
    const subject = 'Someone filled out the Contact form!!!'
    const content = `name: ${name} \n email: ${email} \n message: ${message} `

    const mail = {
        from: creds.USER,
        to: creds.USER,
        subject: subject,
        text: content,
        auth: {
            user: creds.USER,
            refreshToken: auth.REFRESH_TOKEN,
            accessToken: auth.ACCESS_TOKEN,
        }
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.error("ERROR: ", err);
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
    transporter.sendMail({
        from: creds.USER,
        to: email,
        subject: "Submission was successful",
        text: `Thank you for contacting me!\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`
    }, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)