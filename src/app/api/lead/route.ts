import { NextResponse } from "next/server";

const BOT_TOKEN = process.env.TG_BOT_TOKEN!;
const CHAT_ID = process.env.TG_CHAT_ID!;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, company, budget, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Имя и телефон обязательны" }, { status: 400 });
    }

    const text = [
      "🟢 <b>Новая заявка с сайта экореклама.рф</b>",
      "",
      `👤 <b>Имя:</b> ${esc(name)}`,
      `📞 <b>Телефон:</b> ${esc(phone)}`,
      company ? `🏢 <b>Компания:</b> ${esc(company)}` : null,
      `💰 <b>Бюджет:</b> ${esc(budget)}`,
      message ? `\n💬 <b>Сообщение:</b>\n${esc(message)}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("Telegram API error:", err);
      return NextResponse.json({ error: "Ошибка отправки" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Lead route error:", e);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
