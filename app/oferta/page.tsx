import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, GraduationCap, Monitor, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Oferta - RTT by Perkowska",
  description:
    "Sprawdź ofertę kursów języka angielskiego w Łowiczu. Kursy stacjonarne, przygotowanie do egzaminu CAE, lekcje online i powtórka maturalna.",
};

const offers = [
  {
    icon: BookOpen,
    title: "Kursy Stacjonarne",
    subtitle: "Poziomy 1–8",
    description:
      "Kompleksowa nauka w grupach stacjonarnych, od podstaw do poziomu zaawansowanego. Kameralne grupy, indywidualne podejście i sprawdzone metody.",
    accent: "border-primary",
  },
  {
    icon: GraduationCap,
    title: "Egzamin CAE",
    subtitle: "Poziom 9",
    description:
      "Intensywne przygotowanie do certyfikatu Cambridge Advanced English dla najbardziej zaawansowanych. 100% naszych uczniów zdało ten egzamin.",
    accent: "border-destructive",
  },
  {
    icon: Monitor,
    title: "Lekcje Online",
    subtitle: "Zoom",
    description:
      "Pełnowartościowe zajęcia grupowe bez wychodzenia z domu, prowadzone na platformie Zoom. Ta sama jakość — wygoda z dowolnego miejsca.",
    accent: "border-primary",
  },
  {
    icon: FileText,
    title: "Powtórka Maturalna",
    subtitle: "Online",
    description:
      "Intensywny miesiąc wspólnej nauki przed maturą. Omawianie arkuszy i pewniaków egzaminacyjnych — skutecznie i bez stresu.",
    accent: "border-destructive",
  },
];

export default function OfertaPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">

        {/* Centered header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Nasza Oferta
          </h1>
          <div className="h-[2px] bg-destructive w-20 mx-auto mb-8" />
          <p className="text-lg text-foreground/70 leading-loose">
            Zajęcia dopasowane do każdego wieku i poziomu zaawansowania —
            stacjonarnie w Łowiczu lub online przez Zoom.
          </p>
        </div>

        {/* 4 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <Link
                key={index}
                href="/kontakt"
                className={`group relative flex flex-col gap-6 bg-white border-2 ${offer.accent} p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-secondary flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-3 flex-grow">
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">
                    {offer.subtitle}
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    {offer.title}
                  </h2>
                  <p className="text-sm text-foreground/70 leading-loose">
                    {offer.description}
                  </p>
                </div>

                {/* CTA arrow */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mt-2 transition-all group-hover:gap-4">
                  Zapytaj o szczegóły
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-secondary p-12 text-center">
          <h3 className="text-2xl font-bold mb-4 tracking-tight">
            Nie wiesz, który kurs wybrać?
          </h3>
          <p className="text-foreground/60 mb-8 max-w-xl mx-auto leading-loose">
            Skontaktuj się z nami, a pomożemy Ci dobrać zajęcia idealnie
            dopasowane do Twoich potrzeb i poziomu.
          </p>
          <Link
            href="/kontakt"
            className="inline-block px-10 py-5 bg-primary text-white font-bold hover:bg-primary/90 transition-all uppercase tracking-widest text-xs"
          >
            Skonsultuj się z nami
          </Link>
        </div>
      </div>
    </div>
  );
}
