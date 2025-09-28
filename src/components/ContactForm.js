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
    <div className="max-w-xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6">Neem contact op</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Naam"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border rounded p-2"
          required
        />
        <textarea
          placeholder="Bericht"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border rounded p-2"
          rows={5}
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-fuchsia-600 text-white px-4 py-2 rounded"
        >
          {status === "loading" ? "Versturen..." : "Verstuur"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-600">✅ Bericht verzonden!</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600">❌ Er ging iets mis.</p>
      )}
    </div>
  );
}
