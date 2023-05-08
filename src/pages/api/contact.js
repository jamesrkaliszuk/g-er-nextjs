import nodemailer from "nodemailer";

export default async function sendEmail(req, res) {
  const { formData } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.USER_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Garden-ER Web User",
    to: "jimkalwebsites@gmail.com",
    subject: "New Email From Garden-ER Contact Form",
    text: formData.message,
    html: `<h2>From: ${formData.name}</h2> <h2>Email: ${formData.email}</h2> <h2>${formData.phone}</h2> <p><strong>Maintenance : </strong> ${formData.maint} </p> <p><strong>Trimming :</strong> ${formData.trim}</p>  <p><strong>Lawn Care :</strong> ${formData.lawn}</p> <h2>Message</h2> <p>${formData.message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
}
