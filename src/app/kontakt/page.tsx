import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, Clock, Zap, Shield, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt - Bezpłatna konsultacja",
  description:
    "Skontaktuj się z nami w sprawie procedury pre-pack. Oferujemy bezpłatną konsultację i profesjonalne doradztwo.",
};

const benefits = [
  {
    icon: Zap,
    title: "Szybka odpowiedź",
    description: "Odpowiadamy na wszystkie zapytania w ciągu 24 godzin roboczych.",
  },
  {
    icon: Shield,
    title: "Poufność gwarantowana",
    description: "Wszystkie informacje traktowane są z najwyższą poufnością.",
  },
  {
    icon: MessageCircle,
    title: "Bezpłatna konsultacja",
    description: "Pierwsza rozmowa jest całkowicie bezpłatna i niezobowiązująca.",
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kontakt@prepack.pl",
    href: "mailto:kontakt@prepack.pl",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+48 123 456 789",
    href: "tel:+48123456789",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "ul. Przykładowa 123, 00-001 Warszawa",
    href: null,
  },
  {
    icon: Clock,
    label: "Godziny pracy",
    value: "Pon-Pt: 9:00 - 17:00",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 mesh-gradient relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-slate-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-6 border border-slate-200 shadow-sm">
              <MessageCircle className="w-3.5 h-3.5" />
              Kontakt
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 tracking-tight mb-6">
              Porozmawiajmy o
              <br />
              <span className="text-gradient">Twojej sytuacji</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Masz pytania dotyczące procedury pre-pack? Potrzebujesz profesjonalnej
              pomocy? Skontaktuj się z nami – chętnie pomożemy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-slate-50 relative">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Info */}
            <div>
              {/* Benefits */}
              <div className="space-y-6 mb-12">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 text-brand-600">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-slate-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                <h3 className="font-heading font-semibold text-slate-900 mb-6">
                  Dane kontaktowe
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 text-slate-600">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-slate-900 font-medium hover:text-brand-600 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-slate-900 font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-80 md:h-96 bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-500">Mapa zostanie dodana wkrótce</p>
          </div>
        </div>
      </section>
    </>
  );
}
