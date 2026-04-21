import Link from "next/link";
import { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Nauka w grupach (stacjonarnie) - CEL Creative English",
  description:
    "Kursy stacjonarne języka angielskiego w Łowiczu. Kameralne grupy, sprawdzone metody, szybkie postępy — od poziomu 1 do 8.",
};

const features = [
  "Grupy na każdym poziomie zaawansowania (poziomy 1–8)",
  "Kameralne grupy — indywidualne podejście do każdego ucznia",
  "Zajęcia prowadzone stacjonarnie w Łowiczu",
  "2 lekcje tygodniowo",
  "Wiek uczniów: 6–19 lat",
  "Autorski system nauki oparty na sprawdzonych metodach",
];

export default function GrupyPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-destructive mb-4">
            Oferta
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Nauka w grupach
          </h1>
          <div className="h-[2px] bg-destructive w-20 mx-auto mb-8" />
          <p className="text-lg text-foreground/70 leading-loose">
            Kompleksowa nauka stacjonarna w kameralnych grupach — od absolutnych
            podstaw aż do zaawansowanego poziomu 8. Szybkie postępy dzięki
            indywidualnemu podejściu i autorskiemu systemowi nauki.
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
            Dołącz do kursu
          </h2>
          <p className="text-foreground/60 leading-loose mb-8">
            Ceny ustalane są indywidualnie. Skontaktuj się z nami, aby dowiedzieć
            się więcej i zapisać się na zajęcia.
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
