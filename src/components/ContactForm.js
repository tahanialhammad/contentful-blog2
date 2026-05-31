"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-xl mx-auto py-8 px-6 bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/15 font-sans text-right">
      <h2 className="font-serif text-3xl font-bold text-foreground mb-6">تواصل معنا</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-on-surface-variant mb-1">
            الاسم
          </label>
          <input
            type="text"
            placeholder="اكتب اسمك الكامل"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-outline-variant rounded-md p-3 bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-container/30 transition-all text-right"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-on-surface-variant mb-1">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-outline-variant rounded-md p-3 bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-container/30 transition-all text-right"
            style={{ direction: "ltr" }}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-on-surface-variant mb-1">
            الرسالة
          </label>
          <textarea
            placeholder="اكتب رسالتك أو تفاصيل التصميم المخصص الذي ترغب به..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border border-outline-variant rounded-md p-3 bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-container/30 transition-all text-right"
            rows={5}
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-primary text-white border border-transparent font-bold py-3 px-6 rounded-full shadow-ambient hover:shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "جاري الإرسال..." : "إرسال الرسالة"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-600 text-sm font-semibold">✅ تم إرسال رسالتك بنجاح!</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600 text-sm font-semibold">❌ حدث خطأ ما. يرجى المحاولة مرة أخرى.</p>
      )}
    </div>
  );
}
