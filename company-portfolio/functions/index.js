/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const SENDGRID_API_KEY = functions.config().sendgrid.key;

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(SENDGRID_API_KEY);

exports.sendEmail = functions.firestore
    .document("contacts/{contactId}")
    .onCreate(async (snapshot, context) => {
      const data = snapshot.data();

      const msg = {
        to: "anidemz1313@gmail.com",
        from: "dsohail65@gmail.com",
        subject: "New Contact Form Submission",
        text: `
                Name: ${data.name}
                Email: ${data.email}
                Message: ${data.message}
            `,
      };
      try {
        await sgMail.send(msg);
        console.log("Email notification sent");
      } catch (error) {
        console.error("Error sending email notification", error);
      }
    });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
