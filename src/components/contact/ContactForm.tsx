"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, User, Mail, Phone, MessageSquare } from "lucide-react";
import { clsx } from "clsx";

const contactSchema = z.object({
  name: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: z
    .string()
    .min(9, "Numer telefonu musi mieć co najmniej 9 cyfr")
    .regex(/^[\d\s+-]+$/, "Nieprawidłowy format numeru telefonu"),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-xl text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">
          Dziękujemy za wiadomość!
        </h3>
        <p className="text-slate-500 mb-6">
          Odpowiemy na Twoje pytanie w ciągu 24 godzin roboczych.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-secondary"
        >
          Wyślij kolejną wiadomość
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
      {/* Decorative gradient bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-500 to-brand-600" />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          <h3 className="text-xl font-heading font-semibold text-slate-900">
            Formularz kontaktowy
          </h3>
        </div>
        <p className="text-sm text-slate-500">
          Odpowiemy w ciągu 24 godzin roboczych.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="block text-xs font-medium text-slate-700 uppercase tracking-wide"
          >
            Imię i nazwisko
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              {...register("name")}
              type="text"
              id="name"
              className={clsx(
                "block w-full rounded-lg border bg-slate-50 pl-10 pr-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm transition-all outline-none",
                "hover:border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:bg-white",
                errors.name ? "border-red-300" : "border-slate-200"
              )}
              placeholder="Jan Kowalski"
            />
          </div>
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-slate-700 uppercase tracking-wide"
          >
            Adres email
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              {...register("email")}
              type="email"
              id="email"
              className={clsx(
                "block w-full rounded-lg border bg-slate-50 pl-10 pr-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm transition-all outline-none",
                "hover:border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:bg-white",
                errors.email ? "border-red-300" : "border-slate-200"
              )}
              placeholder="jan@firma.pl"
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label
            htmlFor="phone"
            className="block text-xs font-medium text-slate-700 uppercase tracking-wide"
          >
            Numer telefonu
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
              <Phone className="w-4 h-4" />
            </div>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              className={clsx(
                "block w-full rounded-lg border bg-slate-50 pl-10 pr-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm transition-all outline-none",
                "hover:border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:bg-white",
                errors.phone ? "border-red-300" : "border-slate-200"
              )}
              placeholder="+48 123 456 789"
            />
          </div>
          {errors.phone && (
            <p className="text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="block text-xs font-medium text-slate-700 uppercase tracking-wide"
          >
            Wiadomość
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute top-3 left-0 flex items-start pl-4 text-slate-400">
              <MessageSquare className="w-4 h-4" />
            </div>
            <textarea
              {...register("message")}
              id="message"
              rows={4}
              className={clsx(
                "block w-full rounded-lg border bg-slate-50 pl-10 pr-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm transition-all outline-none resize-none",
                "hover:border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:bg-white",
                errors.message ? "border-red-300" : "border-slate-200"
              )}
              placeholder="Opisz swoją sytuację..."
            />
          </div>
          {errors.message && (
            <p className="text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-lg shadow-lg shadow-brand-500/20 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all hover:-translate-y-0.5"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Wysyłanie...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Wyślij wiadomość
              </>
            )}
          </button>
        </div>

        <p className="text-center text-xs text-slate-400 mt-4">
          Wysyłając formularz, akceptujesz naszą{" "}
          <a href="/polityka-prywatnosci" className="text-brand-600 hover:underline">
            politykę prywatności
          </a>
          .
        </p>
      </form>
    </div>
  );
}
