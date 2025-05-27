"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactEmail from "@/email/ContactEmail";
import React from "react";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  // Validate the inputs
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  // Send the email using Resend
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form of Portfolio <onboarding@resend.dev>",
      to: "shaikhmohdnoman612@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactEmail, { message, senderEmail }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    success: true,
    message: "Email sent successfully",
    data: data,
  };
}
