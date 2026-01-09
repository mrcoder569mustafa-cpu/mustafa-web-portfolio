import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const rateLimitMap = new Map();

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  const limit = rateLimitMap.get(ip) || { count: 0, time: now };

  if (now - limit.time < 15 * 60 * 1000) {
    if (limit.count >= 5) return NextResponse.json({ success: false, message: "Too many requests" }, { status: 429 });
    limit.count++;
  } else {
    limit.count = 1;
    limit.time = now;
  }

  rateLimitMap.set(ip, limit);

  try {
    const body = await req.json();
    const { name, email, category, message, token } = body;

    if (!name || !email || !message) return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });

    // -----------------------------
    // ✅ reCAPTCHA verification
    // -----------------------------
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });
    const captchaData = await verifyRes.json();
    if (!captchaData.success || captchaData.score < 0.5) return NextResponse.json({ success: false, message: "Bot detected!" }, { status: 400 });

    // -----------------------------
    // ✅ Nodemailer email send
    // -----------------------------
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Hire Me Request (${category})`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Category:</b> ${category}</p><p><b>Message:</b> ${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
