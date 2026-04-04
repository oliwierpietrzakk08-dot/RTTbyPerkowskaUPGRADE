import Link from "next/link";
import { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Przygotowanie do matury - RTT by Perkowska",
  description:
    "Intensywna powtórka maturalna z języka angielskiego online. Omawianie arkuszy, pewniaków egzaminacyjnych i skutecznych technik zdawania matury.",
};

const features = [
  "Intensywny miesięczny kurs online przed maturą",
  "Omawianie arkuszy maturalnych i pewniaków egzaminacyjnych",
  "Poziom podstawowy i rozszerzony",
  "Skuteczne techniki odpowiedzi pisemnych i ustnych",
  "Małe grupy — czas na każdego ucznia",
  "Prowadzenie przez doświadczonego lektora przygotowującego do egzaminów",
];

export default function MaturaPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-destructive mb-4">
            Oferta — Online
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Przygotowanie do matury
          </h1>
          <div className="h-[2px] bg-destructive w-20 mx-auto mb-8" />
          <p className="text-lg text-foreground/70 leading-loose">
            Intensywny miesiąc wspólnej nauki przed maturą — online przez Zoom.
            Omawiamy arkusze, piszemy razem, ćwiczymy ustne i wychodzimy
            z sali egzaminacyjnej pewni siebie.
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
        <div className="max-w-2xl mx-auto bg-secondary border-t-2 border-primary p-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4">
            Cennik i Zapisy
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
            Zapisz się na powtórkę maturalną
          </h2>
          <p className="text-foreground/60 leading-loose mb-8">
            Ceny ustalane są indywidualnie. Skontaktuj się z nami, by sprawdzić
            terminy i dołączyć do najbliższej grupy.
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
