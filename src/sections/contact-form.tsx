"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import type { Brand } from "@/brand/types";

type Copy = Brand["contactSection"]["form"];
type Field = "name" | "email" | "message";
type Status = "idle" | "sending" | "sent";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "w-full min-h-11 rounded-xl bg-background px-4 py-3 text-base ring-1 ring-line transition-shadow placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-600";

export function ContactForm({ copy }: { copy: Copy }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const nextErrors: Partial<Record<Field, string>> = {};
    if (!values.name) nextErrors.name = copy.requiredError;
    if (!values.email) nextErrors.email = copy.requiredError;
    else if (!EMAIL_PATTERN.test(values.email)) nextErrors.email = copy.emailError;
    if (!values.message) nextErrors.message = copy.requiredError;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Demonstrativo: sem envio real. Integre aqui com a API ou serviço de e-mail do cliente.
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  }

  if (status === "sent") {
    return (
      <div className="flex min-h-96 flex-col items-start justify-center gap-4" role="status">
        <CheckCircle size={44} weight="light" className="text-accent" aria-hidden />
        <p className="font-display text-3xl tracking-tight">{copy.successTitle}</p>
        <p className="max-w-[36ch] leading-relaxed text-muted">{copy.successText}</p>
      </div>
    );
  }

  const fields: { name: Field; label: string; placeholder: string; type: string }[] = [
    { name: "name", label: copy.nameLabel, placeholder: copy.namePlaceholder, type: "text" },
    { name: "email", label: copy.emailLabel, placeholder: copy.emailPlaceholder, type: "email" },
  ];

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-2">
          <label htmlFor={field.name} className="text-sm font-medium">
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            autoComplete={field.name}
            aria-invalid={Boolean(errors[field.name])}
            aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
            className={inputClass}
          />
          {errors[field.name] ? (
            <p id={`${field.name}-error`} className="text-sm text-red-600">
              {errors[field.name]}
            </p>
          ) : null}
        </div>
      ))}

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          {copy.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={copy.messagePlaceholder}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass} resize-none`}
        />
        {errors.message ? (
          <p id="message-error" className="text-sm text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-full rounded-full bg-accent py-4 text-[15px] font-medium text-accent-foreground transition-[transform,opacity] duration-500 ease-fluid active:scale-[0.98] disabled:opacity-70"
      >
        {status === "sending" ? copy.sending : copy.submit}
      </button>
    </form>
  );
}
