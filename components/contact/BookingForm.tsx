"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";

type FormData = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  date: string;
  location: string;
  budget: string;
  message: string;
};

const BUDGETS = [
  "Under £2,000",
  "£2,000 – £4,000",
  "£4,000 – £8,000",
  "£8,000 – £15,000",
  "£15,000+",
  "Let's discuss",
];

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  serviceType: "",
  date: "",
  location: "",
  budget: "",
  message: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.serviceType) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-cinematic p-12 text-center"
      >
        <div className="w-12 h-12 border border-gold mx-auto flex items-center justify-center mb-8">
          <span className="text-gold text-xl">✓</span>
        </div>
        <h3 className="font-display font-light text-ivory text-4xl mb-4">
          Message Received
        </h3>
        <p className="text-muted text-sm leading-7 max-w-sm mx-auto">
          We'll be in touch within 24 hours to begin the conversation. Looking
          forward to creating something together.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="card-cinematic p-8 md:p-12 space-y-8">
      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Full Name *" htmlFor="name">
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </Field>
        <Field label="Email *" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="wonderspictures96@gmail.com"
            required
          />
        </Field>
      </div>

      {/* Row 2: Phone + Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Phone" htmlFor="phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+234 817 952 1770"
          />
        </Field>
        <Field label="Service Type *" htmlFor="serviceType">
          <select
            id="serviceType"
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
            required
            className="field-input appearance-none"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Row 3: Date + Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Event / Project Date" htmlFor="date">
          <Input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
        </Field>
        <Field label="Location" htmlFor="location">
          <Input
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="City, Country"
          />
        </Field>
      </div>

      {/* Budget */}
      <Field label="Budget Range" htmlFor="budget">
        <div className="flex flex-wrap gap-2">
          {BUDGETS.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setForm((p) => ({ ...p, budget: b }))}
              className={`
                text-[10px] font-mono tracking-widest2 uppercase px-4 py-2.5 border transition-all duration-200
                ${form.budget === b
                  ? "bg-gold text-obsidian border-gold"
                  : "bg-transparent text-muted border-whisper/50 hover:border-muted hover:text-ivory"}
              `}
            >
              {b}
            </button>
          ))}
        </div>
      </Field>

      {/* Message */}
      <Field label="Tell Us About Your Project" htmlFor="message">
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Describe your event, vision, and any details that matter most to you..."
          className="field-input resize-none"
        />
      </Field>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-2">
        <button
          onClick={handleSubmit}
          disabled={loading || !form.name || !form.email || !form.serviceType}
          className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span className="w-3 h-3 border border-obsidian border-t-transparent rounded-full animate-spin" />
              Sending…
            </>
          ) : (
            <>Send Enquiry →</>
          )}
        </button>

        {/* WhatsApp */}
        <a
          href="https://wa.me/+2348179521770?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20booking%20DT%20Films."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}

/* ── Reusable sub-components ── */

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-[10px] font-mono tracking-widest2 text-muted uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`field-input ${className}`}
    />
  );
}
