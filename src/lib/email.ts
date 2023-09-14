import { Resend } from "resend";
import type { ContactMeFormData } from "../schemas/contactMe";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
export type EmailData = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

export async function sendContactMail(data: ContactMeFormData) {
  return sendMail({
    from: "astro.portfolio@nikaa.online",
    to: "nika.qvrivishvilipc@gmail.com",
    subject: "portfolio contact",
    html: `
      <div>
        <p>sender name: ${data.name}</p>
        <p>sender email: ${data.email}</p>
        <p>${data.message}</p>
      </div>`,
  });
}

async function sendMail(data: EmailData) {
  const res = await resend.emails.send(data);

  return res;
}
