import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { Check } from "lucide-react";

const ceaLevels = [
  { level: "A2 Key (KET)", description: "Podstawowy poziom biegłości językowej." },
  { level: "B1 Preliminary (PET)", description: "Średniozaawansowany poziom dla uczniów szkolnych." },
  { level: "B2 First (FCE)", description: "Poziom wyższy średniozaawansowany, uznawany przez pracodawców i uczelnie." },
  { level: "C1 Advanced (CAE)", description: "Poziom zaawansowany, potwierdzający wysoką biegłość językową." },
];

export default function ExamsPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Egzaminy CAE i Matura" 
          subtitle="Profesjonalne przygotowanie do najważniejszych certyfikatów językowych."
        />
        
        {/* Sekcja CAE */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold tracking-tight mb-8">Cambridge English Assessment (CEA)</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-lg text-foreground/70 leading-loose">
                Egzaminy Cambridge English Assessment są uznawane na całym świecie przez tysiące pracodawców, uczelni i organizacji rządowych. W RTT by Perkowska specjalizujemy się w przygotowywaniu uczniów do tych prestiżowych certyfikatów.
              </p>
              <div className="flex gap-12 pt-4">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-primary tracking-tight">50+</span>
                  <span className="text-sm text-foreground/50 uppercase tracking-widest mt-1">Uczniów z certyfikatem</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-primary tracking-tight">100%</span>
                  <span className="text-sm text-foreground/50 uppercase tracking-widest mt-1">Zdawalności</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ceaLevels.map((cea, index) => (
                <div key={index} className="p-6 border border-border bg-white hover:border-destructive transition-colors">
                  <h4 className="font-bold mb-2 tracking-tight">{cea.level}</h4>
                  <p className="text-xs text-foreground/60 leading-relaxed">{cea.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sekcja Matura */}
        <div className="py-20 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">Egzamin Maturalny</h3>
              <p className="text-lg text-foreground/70 leading-loose">
                Przygotowujemy uczniów do egzaminu maturalnego z języka angielskiego zarówno na poziomie podstawowym, jak i rozszerzonym. Nasze zajęcia skupiają się na wszystkich kluczowych kompetencjach: słuchaniu, czytaniu, gramatyce oraz wypowiedzi pisemnej i ustnej.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-sm">Poziom podstawowy i rozszerzony</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-sm">Intensywne treningi arkuszy</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-sm">Skuteczne techniki egzaminacyjne</span>
                </li>
              </ul>
            </div>
            <div className="bg-secondary p-12">
              <h4 className="text-2xl font-bold mb-4 tracking-tight">Chcesz zdać egzamin?</h4>
              <p className="text-sm text-foreground/60 mb-8 leading-loose">
                Zapisz się na zajęcia już dziś i dołącz do grona naszych uczniów, którzy z sukcesem zdają egzaminy CAE i maturalne.
              </p>
              <Link
                href="/kontakt"
                className="inline-block px-10 py-5 bg-primary text-white font-bold hover:bg-primary/90 transition-all rounded-sm uppercase tracking-widest text-xs"
              >
                Zapisz się teraz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
