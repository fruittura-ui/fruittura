import nodemailer from "nodemailer"

type ContactBody = {
  name?: string
  email?: string
  phone?: string
  company?: string
  subject?: string
  message?: string
}

async function sendEmail(body: ContactBody) {
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    throw new Error("SMTP configuration is missing. Set SMTP_HOST, SMTP_USER and SMTP_PASS.")
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user,
      pass,
    },
  })

  const to = process.env.CONTACT_TO || "info@fruittura.in"
  const from = process.env.CONTACT_FROM || user

  const subject = `Website Contact: ${body.subject || "New message"}`
  const text = `Name: ${body.name || "-"}\nEmail: ${body.email || "-"}\nPhone: ${body.phone || "-"}\nCompany: ${body.company || "-"}\nSubject: ${body.subject || "-"}\n\nMessage:\n${body.message || "-"}`

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html: `<p><strong>Name:</strong> ${body.name || "-"}</p>
           <p><strong>Email:</strong> ${body.email || "-"}</p>
           <p><strong>Phone:</strong> ${body.phone || "-"}</p>
           <p><strong>Company:</strong> ${body.company || "-"}</p>
           <p><strong>Subject:</strong> ${body.subject || "-"}</p>
           <hr />
           <p>${(body.message || "-").replace(/\n/g, "<br />")}</p>`,
  })
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactBody

    if (!body.name || !body.email || !body.subject || !body.message) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), { status: 400 })
    }

    await sendEmail(body)

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err: any) {
    console.error("/api/contact error:", err)
    return new Response(JSON.stringify({ error: err?.message || "Internal Server Error" }), { status: 500 })
  }
}
