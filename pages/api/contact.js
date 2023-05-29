// pages/api/contact.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  // validate form data here
  if (
    !email ||
    !email.includes("@") ||
    !name ||
    name.trim() === "" ||
    !message ||
    message.trim() === ""
  ) {
    res.status(422).json({ message: "invalid input" });
    return;
  }

  // create a nodemailer transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "helen@taylor-madewebdesign.com",
      pass: "fvshzufvnuykqtjo",
    },
  });

  // send email to customer
  await transporter.sendMail({
    from: "Taylor-Made Web Design <helen@taylor-madewebdesign.com>",
    to: email,
    subject: "Thank you for contacting us",
    text: `Hi ${name},\n\nThank you for contacting us. We will get back to you as soon as possible.\n\nBest regards,\nHelen \n Taylor-Made Web Design`,
  });

  // send email to website owner
  await transporter.sendMail({
    from: "Taylor-Made Web Design",
    to: "helen@taylor-madewebdesign.com",
    subject: "New contact form submission",
    text: `You have received a new contact form submission from ${name} (${email}): ${message}`,
  });

  res.status(200).json({ message: "Form submission successful" });
}

// import { MongoClient } from "mongodb";

// async function handler(req, res) {
//   if (req.method === "POST") {
//     const { email, name, message } = req.body;

//     if (
//       !email ||
//       !email.includes("@") ||
//       !name ||
//       name.trim() === "" ||
//       !message ||
//       message.trim() === ""
//     ) {
//       res.status(422).json({ message: "invalid input" });
//       return;
//     }
//     const newMessage = {
//       email,
//       name,
//       message,
//     };

//     let client;

//     try {
//       client = await MongoClient.connect(
//         "mongodb+srv://HelenT:pfVcRZN0bFJMptOP@cluster0.6tfofs8.mongodb.net/taylor-made?retryWrites=true&w=majority"
//       );
//     } catch (error) {
//       res.status(500).json({ message: "Could not connect to email server" });
//       return;
//     }
//     const db = client.db();

//     try {
//       const result = await db.collection("messages").insertOne(newMessage);
//       newMessage.id = result.insertedId;
//     } catch (error) {
//       client.close();
//       res.status(500).json({ message: "Sending email failed" });
//       return;
//     }

//     client.close();

//     res
//       .status(201)
//       .json({
//         message: "Your email was sent successfully.",
//         message: newMessage,
//       });
//   }
// }

// export default handler;
