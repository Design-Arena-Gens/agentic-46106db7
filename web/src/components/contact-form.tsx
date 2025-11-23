"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      formData.append("_subject", "Demande de démonstration robot UV-C");
      formData.append("_captcha", "false");
      await fetch("https://formsubmit.co/ajax/info@iceem.tn", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      form.reset();
      setState("success");
      setTimeout(() => setState("idle"), 4000);
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 4000);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-describedby="contact-state"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-white/80">
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Votre nom"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="organisation"
            className="text-sm font-medium text-white/80"
          >
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            placeholder="Nom de l'établissement"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-white/80">
            Email professionnel
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="nom@domaine.tn"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-white/80">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+216 ..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-white/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Expliquez votre projet ou vos besoins en désinfection."
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
        />
      </div>

      <div className="space-y-3">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60 md:w-auto"
          disabled={state === "loading"}
        >
          {state === "loading" ? "Envoi en cours..." : "Demander une démonstration"}
        </button>
        <p
          id="contact-state"
          className="text-sm text-white/60"
          role="status"
        >
          {state === "success" &&
            "Merci ! Nous vous recontactons sous 24 heures ouvrées."}
          {state === "error" &&
            "Une erreur est survenue. Merci de réessayer ou de nous contacter par téléphone."}
          {state === "idle" &&
            "Nous répondons rapidement : du lundi au vendredi, 8h30 - 18h."}
          {state === "loading" && "Tentative d'envoi de votre message..."}
        </p>
      </div>
    </form>
  );
}
