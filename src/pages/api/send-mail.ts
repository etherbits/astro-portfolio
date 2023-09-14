import { type APIRoute } from "astro";
import { sendContactMail } from "../../lib/email";
import { contactMeSchema } from "../../schemas/contactMe";

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const contactData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  console.log(contactData)

  const zodRes = contactMeSchema.safeParse(contactData);

  if (!zodRes.success) {
    console.log(zodRes.error.format())
    return new Response(JSON.stringify(zodRes.error.format()), { status: 422 });
  }

  const resendRes = await sendContactMail(zodRes.data)

  if (!resendRes) {
    return new Response("Resend could not send email", { status: 500 })
  }

  return new Response("ok", { status: 200 });
};
