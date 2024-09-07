import type { ContactMeFormData } from "../schemas/contactMe";

export type EmailData = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

export async function sendContactMail(data: ContactMeFormData) {
  return sendMail({
    from: "astro.portfolio@nikadev.com",
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
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return false;
  }

  return true;
}
