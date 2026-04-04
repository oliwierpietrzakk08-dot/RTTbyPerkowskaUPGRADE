"use client";

import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    title: "Kursy grupowe",
    description: "Zajęcia w kameralnych grupach do 10 osób.",
    features: [
      "60 minut zajęć",
      "Materiały dydaktyczne",
      "Regularne testy postępów",
      "Dostęp do platformy online",
    ],
    highlight: false,
  },
  {
    title: "Zajęcia indywidualne",
    description: "Nauka 1 na 1 dopasowana do Twojego tempa.",
    features: [
      "60 minut zajęć",
      "Indywidualny program",
      "Elastyczne terminy",
      "Pełne skupienie lektora",
    ],
    highlight: true,
  },
  {
    title: "Egzaminy CAE / Matura",
    description: "Specjalistyczne przygotowanie egzaminacyjne.",
    features: [
      "Praca z arkuszami",
      "Techniki egzaminacyjne",
      "Egzaminy próbne",
      "Gwarancja przygotowania",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Cennik" 
          subtitle="Ceny ustalane są indywidualnie, aby jak najlepiej dopasować ofertę do Twoich potrzeb."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={cn(
                "border p-10 flex flex-col h-full bg-white transition-all",
                plan.highlight ? "border-primary border-2" : "border-border"
              )}
            >
              <h3 className="text-xl font-bold tracking-tight mb-2 uppercase">{plan.title}</h3>
              <p className="text-sm text-foreground/50 mb-8">{plan.description}</p>
              
              <ul className="flex flex-col gap-4 mb-12 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm text-foreground/70">
                    <span className="w-1.5 h-1.5 bg-destructive" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                href="/kontakt"
                className={cn(
                  buttonVariants({ variant: plan.highlight ? "default" : "outline" }),
                  "w-full py-6 font-bold uppercase tracking-widest text-xs rounded-none h-auto"
                )}
              >
                Zapytaj o cenę
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
          <p className="text-foreground/60 leading-loose italic">
            "Ceny ustalane są indywidualnie. Skontaktuj się z nami, a dobierzemy ofertę dopasowaną do Twoich potrzeb i możliwości."
          </p>
        </div>
      </div>
    </div>
  );
}
