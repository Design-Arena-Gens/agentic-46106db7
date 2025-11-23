import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  Clock4,
  GaugeCircle,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const stats = [
  {
    value: "99,99 %",
    label: "de charges microbiennes éliminées",
    detail: "Tests certifiés UV-C SteriPro",
  },
  {
    value: "10 min",
    label: "pour traiter un bloc opératoire",
    detail: "Cycle complet automatisé",
  },
  {
    value: "150+",
    label: "zones critiques accompagnées",
    detail: "Hôpitaux, cliniques & laboratoires",
  },
];

const solutions = [
  {
    title: "Robot SteriPro UV-C",
    description:
      "Robot mobile de désinfection autonome validé par le Ministère de la Santé. Neutralise bactéries, virus et spores sans agents chimiques.",
    bullets: [
      "Traçabilité complète et rapports automatiques",
      "Déploiement sécurisé grâce aux capteurs LiDAR",
      "Interface multilingue, cycles personnalisables",
    ],
    icon: Bot,
  },
  {
    title: "Ingénierie & intégration",
    description:
      "Audit des flux, cartographie des zones à risque et intégration dans vos protocoles existants.",
    bullets: [
      "Analyse du risque biologique in situ",
      "Protocoles UV-C adaptés à chaque zone",
      "Formation des équipes biomédicales",
    ],
    icon: GaugeCircle,
  },
  {
    title: "Support & maintenance 24/7",
    description:
      "Supervision connectée, maintenance préventive et intervention rapide partout en Tunisie.",
    bullets: [
      "Hotline biomédicale dédiée",
      "Pièces d'origine et mises à jour logicielles",
      "Contrats SLA personnalisés",
    ],
    icon: ShieldCheck,
  },
];

const sectors = [
  "Blocs opératoires & salles d'endoscopie",
  "Services d'oncologie, radiologie & stérilisation",
  "Pharmacies centrales & laboratoires officiels",
  "Industries agroalimentaires et cosmétiques",
];

const steps = [
  {
    title: "Diagnostic sur site",
    description:
      "Audit des risques, mesure de la biocontamination et projection ROI.",
  },
  {
    title: "Pilotage & formation",
    description:
      "Mise en service assistée, transfert de compétences et certification des équipes.",
  },
  {
    title: "Suivi continu",
    description:
      "Maintenance prédictive, rapports UV-C et optimisation des cycles.",
  },
];

const testimonials = [
  {
    quote:
      "Le robot SteriPro nous a permis de réduire drastiquement les infections nosocomiales en réanimation. La solution ICEEM s'intègre parfaitement à nos protocoles.",
    author: "Dr. Laila Ben Ayed",
    role: "Responsable hygiène hospitalière - Clinique Ezzahra",
  },
  {
    quote:
      "Au-delà de la technologie, l'équipe ICEEM assure une présence terrain essentielle. Nous déployons désormais la désinfection UV-C sur tous nos blocs.",
    author: "Hakim Trabelsi",
    role: "Directeur technique - Groupe Médis",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-[-15%] h-[420px] w-[420px] rounded-full bg-sky-500/40 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[360px] w-[360px] rounded-full bg-blue-900/60 blur-[160px]" />
      </div>

      <div className="relative">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="ICEEM"
              width={140}
              height={40}
              priority
            />
            <span className="hidden text-sm font-medium uppercase tracking-[0.3em] text-white/60 md:inline-block">
              Ingénierie & Solutions UV-C
            </span>
          </Link>
          <nav className="hidden items-center gap-10 text-sm text-white/70 md:flex">
            <a href="#solutions" className="transition hover:text-white">
              Solutions
            </a>
            <a href="#secteurs" className="transition hover:text-white">
              Secteurs
            </a>
            <a href="#accompagnement" className="transition hover:text-white">
              Accompagnement
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
          <Link
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white shadow-[0_0_25px_rgba(8,145,178,0.35)] transition hover:border-sky-400 hover:bg-sky-500/20 md:inline-flex"
          >
            <PhoneCall className="h-4 w-4" />
            Parler à un expert
          </Link>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-28 md:gap-32">
          <section
            id="hero"
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 px-8 pb-16 pt-14 shadow-[0_40px_120px_-60px_rgba(8,145,178,0.6)] backdrop-blur-3xl md:px-12 md:pt-16"
          >
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-sky-500/40 to-transparent md:block" />
            <div className="relative grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm uppercase tracking-[0.3em] text-sky-200">
                  Robotique médicale Tunisie
                </span>
                <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                  Désinfection UV-C robotisée pour vos zones critiques.
                </h1>
                <p className="max-w-xl text-lg text-white/70 md:text-xl">
                  ICEEM accompagne les établissements de santé et industries
                  sensibles dans la lutte contre les infections. Bénéficiez de
                  robots UV-C certifiés, de protocoles opératoires éprouvés et
                  d&apos;un support technique basé en Tunisie.
                </p>
                <div className="flex flex-col gap-4 text-sm text-white/70 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                    <ShieldCheck className="h-5 w-5 text-sky-300" />
                    <span>Validé par le Ministère de la Santé tunisien</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                    <Clock4 className="h-5 w-5 text-sky-300" />
                    <span>Cycle complet en 10 minutes</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
                  >
                    Demander une démonstration
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="https://iceem.tn"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white/80 transition hover:border-sky-400 hover:text-white"
                  >
                    Télécharger la brochure
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/20 via-white/5 to-white/0 shadow-[0_35px_120px_-60px_rgba(56,189,248,0.9)]" />
                <div className="relative h-full rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>Monitoring en temps réel</span>
                    <Sparkles className="h-4 w-4 text-sky-300" />
                  </div>
                  <div className="mt-8 space-y-6">
                    <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
                      <div className="flex items-center justify-between text-white/80">
                        <span>Cycle Bloc B23</span>
                        <span>Terminé</span>
                      </div>
                      <p className="mt-2 text-xs text-white/50">
                        Durée: 09:47 min &nbsp; • &nbsp; UV-C dose 253 µW/cm²
                      </p>
                      <div className="mt-4 h-2 w-full rounded-full bg-white/10">
                        <div className="h-full w-full rounded-full bg-gradient-to-r from-sky-300 to-sky-500" />
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                          Validation microbiologique
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-white">
                          -4,2 log
                        </p>
                        <p className="text-xs text-white/50">
                          Sur Staphylococcus aureus
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                          Temps économisé
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-white">
                          3 h / jour
                        </p>
                        <p className="text-xs text-white/50">
                          vs protocole chimique manuel
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-black/30 p-6 md:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-sm text-white/70">{stat.label}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-200/80">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="solutions" className="space-y-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
                  Solutions ICEEM
                </p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                  Une approche 360° pour sécuriser vos environnements sensibles.
                </h2>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-sky-200 transition hover:text-white"
              >
                Programmer un audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {solutions.map((solution) => (
                <div
                  key={solution.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition hover:border-sky-400/60 hover:bg-sky-500/10"
                >
                  <div className="absolute right-6 top-6 text-sky-200/60 transition group-hover:text-sky-200">
                    <solution.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70">
                    {solution.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-white/80">
                    {solution.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 rounded-2xl bg-black/30 p-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section
            id="secteurs"
            className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/60 via-slate-950 to-slate-950 p-10"
          >
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
                  Secteurs accompagnés
                </p>
                <h2 className="text-3xl font-semibold md:text-4xl">
                  De l&apos;hôpital public aux industries réglementées.
                </h2>
                <p className="text-base text-white/70">
                  Nos équipes certifiées interviennent dans tout le pays : Grand
                  Tunis, Sfax, Sousse, Bizerte, Sidi Bouzid… Nous adaptons nos
                  protocoles UV-C aux contraintes de chaque site et aux normes
                  en vigueur (ANM, ISO 14644, GMP).
                </p>
                <ul className="grid gap-3 text-sm text-white/80 md:grid-cols-2">
                  {sectors.map((sector) => (
                    <li
                      key={sector}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                    >
                      <Building2 className="h-4 w-4 text-sky-300" />
                      <span>{sector}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6 rounded-3xl border border-white/10 bg-black/40 p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-sky-200/90">
                  Étude de cas
                </p>
                <h3 className="text-xl font-semibold">
                  Projet CHU La Rabta – Blocs opératoires
                </h3>
                <div className="space-y-4 text-sm text-white/70">
                  <p>
                    Mise en place de 4 robots SteriPro. Standardisation des
                    cycles UV-C sur 18 salles et interfaçage avec la GMAO
                    existante.
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Temps entre interventions
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        -38 %
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Cas d&apos;infection croisée
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        -52 %
                      </p>
                    </div>
                  </div>
                  <p className="rounded-2xl border border-sky-300/20 bg-sky-500/10 px-4 py-3 text-sky-100">
                    Résultats validés avec le service d&apos;hygiène hospitalière et l&apos;INM.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="accompagnement" className="space-y-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
                  Méthodologie ICEEM
                </p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                  Un accompagnement certifié ISO 13485 centré patient.
                </h2>
              </div>
              <p className="max-w-xl text-sm text-white/70">
                Chaque projet est piloté par un ingénieur biomédical dédié en
                coordination avec vos référents hygiène et direction technique.
                Les livrables sont disponibles en français et en anglais.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-black/30 p-7"
                >
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-base font-semibold text-white/90">
                      0{index + 1}
                    </span>
                    <span>Étape</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
                  Témoignages
                </p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                  Des résultats mesurables sur le terrain.
                </h2>
              </div>
              <p className="max-w-xl text-sm text-white/70">
                ICEEM est déjà partenaire de cliniques privées, hôpitaux
                universitaires, laboratoires nationaux et industriels
                pharmaceutiques.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.author}
                  className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
                >
                  <Sparkles className="h-6 w-6 text-sky-300" />
                  <blockquote className="mt-4 text-base leading-relaxed text-white/80">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-white/70">
                    <p className="font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p>{testimonial.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/20 via-slate-950 to-slate-950 p-10 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-100">
                Prenons rendez-vous
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Exposez-nous vos enjeux d&apos;hygiène environnementale.
              </h2>
              <p className="text-sm text-white/80">
                Nos experts biomédicaux se déplacent dans tout le pays pour
                réaliser audits, démonstrations et formations. Réponse garantie
                sous 24 heures ouvrées.
              </p>
              <div className="space-y-4 text-sm text-white/75">
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-5 w-5 text-sky-200" />
                  <span>+216 29 905 268</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-sky-200" />
                  <span>Support 24/7 pour nos clients sous contrat</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-sky-200" />
                  <span>
                    Centre d&apos;ingénierie : Technopôle El Ghazala, Ariana —
                    Antennes : Sfax &amp; Sousse
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
              <ContactForm />
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-black/40">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} ICEEM. Tous droits réservés.</p>
            <div className="flex flex-wrap items-center gap-6">
              <span>ICEEM Tunisie</span>
              <span>NIF 1609288 T</span>
              <a
                href="mailto:info@iceem.tn"
                className="text-white/80 transition hover:text-white"
              >
                info@iceem.tn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
