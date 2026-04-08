"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xlgovqlq");

  if (state.succeeded) {
    return (
      <div className="bg-white rounded-3xl border border-cream shadow-sm p-10 text-center">
        <div className="mx-auto h-16 w-16 rounded-full bg-seafoam/15 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            className="h-8 w-8 text-seafoam"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-5 font-display text-3xl text-ocean">Message sent!</h2>
        <p className="mt-4 text-ocean/80 leading-relaxed">
          Thanks so much for reaching out. We&apos;ll get back to you as soon as we
          can, usually the same day. Keep an eye on your inbox (and spam folder just
          in case).
        </p>
        <p className="mt-4 text-ocean/60 text-sm">
          💛 Can&apos;t wait to meet your family.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl border border-cream shadow-sm p-8 space-y-5"
    >
      <h2 className="font-display text-3xl text-ocean">Send a message</h2>

      {/* Honeypot — bots fill this, humans never see it. Formspree ignores
          submissions where _gotcha has any value. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-bold text-ocean">
          Your name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          autoComplete="name"
          className="mt-1.5 w-full rounded-xl border border-cream px-4 py-3 focus:border-seafoam focus:outline-none focus:ring-2 focus:ring-seafoam/30"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="mt-1.5 text-sm text-red-600"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-bold text-ocean">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-xl border border-cream px-4 py-3 focus:border-seafoam focus:outline-none focus:ring-2 focus:ring-seafoam/30"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-1.5 text-sm text-red-600"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-ocean">
          Phone <span className="text-ocean/50 font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          className="mt-1.5 w-full rounded-xl border border-cream px-4 py-3 focus:border-seafoam focus:outline-none focus:ring-2 focus:ring-seafoam/30"
        />
        <ValidationError
          prefix="Phone"
          field="phone"
          errors={state.errors}
          className="mt-1.5 text-sm text-red-600"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-ocean">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full rounded-xl border border-cream px-4 py-3 focus:border-seafoam focus:outline-none focus:ring-2 focus:ring-seafoam/30"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1.5 text-sm text-red-600"
        />
      </div>

      {/* Form-level errors (rate limiting, network issues, etc.) */}
      <ValidationError
        errors={state.errors}
        className="text-sm text-red-600"
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full rounded-full bg-sandy hover:bg-ocean text-white py-3.5 font-bold shadow transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state.submitting ? "Sending…" : "Send Message"}
      </button>

      <p className="text-xs text-ocean/60 text-center">
        We usually respond the same day.
      </p>
    </form>
  );
}
