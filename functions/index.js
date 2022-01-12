const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
const cors = require("cors")({orgin: true});
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {user: config.user.email, pass: config.user.password},
});

let mailOptions = {
    from: "Erica De Guzman", 
    
    subject: "Testing nodemailer", 
    text:"Test successful",
};

exports.sendMail = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        transporter.sendMail(mailOptions, error => {
            if(error) {
                response.send(error);
            }
            else {
                response.send("Message sent successfully");
            }
        });
    });
});