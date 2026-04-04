import Link from "next/link";
import { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Certyfikat CAE - RTT by Perkowska",
  description:
    "Intensywne przygotowanie do egzaminu Cambridge Advanced English (CAE). 100% naszych uczniów zdaje ten egzamin.",
};

const features = [
  "Poziom 9 — najbardziej zaawansowany kurs w naszej ofercie",
  "Przygotowanie do certyfikatu Cambridge Advanced English (CAE)",
  "100% skuteczności — wszyscy nasi uczniowie zdają egzamin",
  "Praca z autentycznymi arkuszami egzaminacyjnymi",
  "Techniki egzaminacyjne i strategie odpowiedzi",
  "Małe grupy umożliwiające intensywną pracę",
];

export default function CaePage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-destructive mb-4">
            Oferta — Poziom 9
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Certyfikat CAE
          </h1>
          <div className="h-[2px] bg-destructive w-20 mx-auto mb-8" />
          <p className="text-lg text-foreground/70 leading-loose">
            Intensywny kurs przygotowujący do światowego certyfikatu Cambridge
            Advanced English. Dla uczniów na najwyższym poziomie zaawansowania —
            z gwarantowaną skutecznością.
          </p>
        </div>

        {/* Result callout */}
        <div className="max-w-md mx-auto text-center mb-16">
          <span className="text-6xl font-bold text-primary tracking-tight">100%</span>
          <p className="text-xs uppercase tracking-widest text-foreground/50 mt-2">
            Skuteczności na egzaminie CAE
          </p>
        </div>

        {/* Features */}
        <div className="max-w-xl mx-auto mb-20">
          <ul className="flex flex-col gap-4">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
                </div>
                <span className="text-foreground/80 leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cennik i Zapisy placeholder */}
        <div className="max-w-2xl mx-auto bg-secondary border-t-2 border-destructive p-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4">
            Cennik i Zapisy
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
            Zacznij przygotowania do CAE
          </h2>
          <p className="text-foreground/60 leading-loose mb-8">
            Ceny ustalane są indywidualnie. Skontaktuj się z nami, by sprawdzić
            dostępność i zapisać się do grupy CAE.
          </p>
          <Link
            href="/kontakt"
            className="inline-block px-10 py-5 bg-primary text-white font-bold hover:bg-primary/90 transition-all uppercase tracking-widest text-xs"
          >
            Zapytaj i zapisz się
          </Link>
        </div>

      </div>
    </div>
  );
}
