import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields required" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Footer Contact Message",
      html: `
        <h3>New Footer Message</h3>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
