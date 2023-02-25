import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import fetch from "node-fetch";

type ContactFormFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
  token: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_ZOHO_EMAIL_USER!,
    pass: process.env.NEXT_PUBLIC_ZOHO_EMAIL_PASSWORD!,
  },
  debug: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, phone, message, token } =
      req.body as ContactFormFields;
    if (!name || !email || !phone || !message) {
      res.status(400).json({ error: "Missing fields in request body." });
      return;
    }
    if (!token) {
      res.status(400).json({ error: "Missing reCAPTCHA token." });
      return;
    }
    try {
      const captchaResult = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`,
        {
          method: "POST",
        }
      ).then((res) => res.json());
      if (!(captchaResult as { success: boolean }).success) {
        res.status(400).json({ error: "reCAPTCHA verification failed." });
        return;
      }
      const mailOptions = {
        from: process.env.NEXT_PUBLIC_FROM_EMAIL!,
        to: process.env.NEXT_PUBLIC_TO_EMAIL!,
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`,
      };
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Failed to send message.", error);
      res.status(500).json({ error: "Failed to send message." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
