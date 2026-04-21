"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "FAQ - RTT by Perkowska",
//   description: "Najczęściej zadawane pytania o naszej szkole. Znajdź odpowiedzi na interesujące Ciebie zagadnienia.",
// };

const faqData = [
  { q: "W którym roku powstała szkoła CEL Creative English?", a: "Nasza szkoła została założona w 2008 roku i od blisko 20 lat z sukcesami kształcimy mieszkańców Łowicza i okolic." },
  { q: "Co wyróżnia Państwa metodę nauczania?", a: "Fundamentem szkoły jest autorska metoda Krystyny Perkowskiej. Wybierając CEL Creative English, masz pewność, że nauka przebiega według ściśle określonego, skutecznego planu, który osobiście nadzoruje założycielka szkoły." },
  { q: "Czy przygotowujecie Państwo do certyfikatu CAE?", a: "Tak, przygotowanie do egzaminów Cambridge (szczególnie CAE) to jedna z naszych głównych specjalizacji." },
  { q: "Jak wygląda przygotowanie do matury?", a: "Prowadzimy intensywne kursy maturalne, skupiając się na technikach egzaminacyjnych, pisaniu wypracowań i przełamywaniu bariery w mówieniu." },
  { q: "Jaka jest skuteczność Państwa uczniów?", a: "Od lat notujemy bardzo wysoką zdawalność. Nasi uczniowie często w ciągu kilku miesięcy przeskakują z ocen 2/3 na bardzo dobre 5." },
  { q: "W jakich godzinach funkcjonuje szkoła?", a: "Godziny są ustalane indywidualnie, zazwyczaj lekcje odbywają się popołudniami i wieczorami (14:00 – 21:00)." },
  { q: "Czy prowadzicie Państwo zajęcia online?", a: "Tak, oferujemy profesjonalne lekcje przez platformę Zoom, które jakością nie odbiegają od spotkań stacjonarnych." },
  { q: "Gdzie dokładnie znajduje się szkoła?", a: "Nasza siedziba mieści się przy ul. Zduńskiej 48, lok. 4 w Łowiczu." },
  { q: "Ile osób liczy grupa?", a: "Stawiamy na małe, komfortowe grupy, co pozwala na indywidualne podejście do każdego słuchacza." },
  { q: "Czy można dołączyć w trakcie roku szkolnego?", a: "Tak, jeśli tylko posiadamy wolne miejsce w grupie na odpowiednim poziomie zaawansowania." },
  { q: "Jak mogę się zapisać?", a: "Najszybszą drogą jest kontakt telefoniczny lub formularz w zakładce Kontakt." },
  { q: "Czy oferujecie Państwo lekcję próbną?", a: "Prosimy o kontakt w celu ustalenia szczegółów dotyczących pierwszego spotkania zapoznawczego." },
  { q: "Jak wyglądają płatności?", a: "Oferujemy jasny system rozliczeń miesięcznych. Szczegóły przedstawiamy po dobraniu trybu nauki." },
  { q: "Dla kogo przeznaczone są kursy?", a: "Specjalizujemy się w pracy z młodzieżą (szkoła podstawowa i średnia) oraz przygotowaniu do certyfikatów." },
  { q: "Czy zajęcia odbywają się w wakacje?", a: "Harmonogram letni ustalamy oddzielnie – zapraszamy do śledzenia naszych aktualności." }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Centered Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-destructive mb-4">
            Rozwiewamy wątpliwości
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Najczęściej zadawane pytania
          </h1>
          <div className="h-[2px] bg-destructive w-20 mx-auto mb-8" />
          <p className="text-lg text-foreground/70 leading-loose">
            Znajdź odpowiedzi na najważniejsze pytania dotyczące naszej szkoły, kursów i organizacji zajęć.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border transition-all duration-300 rounded-sm ${isOpen ? 'border-primary bg-secondary/5' : 'border-border bg-white hover:border-border/80'}`}
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-foreground text-sm md:text-base pr-8">
                    {item.q}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-secondary text-primary'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 pt-0 text-foreground/70 text-sm leading-loose">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
