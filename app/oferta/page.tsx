import SectionHeader from "@/components/SectionHeader";
import OfferCard from "@/components/OfferCard";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Oferta - Kursy Angielskiego - RTT by Perkowska",
  description: "Sprawdź ofertę kursów języka angielskiego w Łowiczu. Kursy grupowe, indywidualne online, przygotowanie do egzaminów i matury.",
};

const offers = [
  {
    title: "Kursy grupowe",
    items: [
      "Max 10 osób w grupie",
      "Zajęcia 60 minut",
      "Dla dzieci od 10 lat i dorosłych do 20 lat",
      "Wszystkie poziomy zaawansowania",
    ],
  },
  {
    title: "Zajęcia indywidualne online",
    items: [
      "Elastyczne terminy",
      "Nauczanie 1 na 1",
      "Przez internet, z dowolnego miejsca",
    ],
  },
  {
    title: "Przygotowanie do egzaminów CAE",
    items: [
      "Wszystkie poziomy egzaminów Cambridge",
      "100% skuteczność dotychczasowych uczniów",
      "Ponad 50 zdanych egzaminów",
    ],
  },
  {
    title: "Przygotowanie do matury",
    items: [
      "Język angielski na poziomie podstawowym i rozszerzonym",
      "Kompleksowe przygotowanie",
      "Skuteczne techniki egzaminacyjne",
    ],
  },
];

export default function OfferPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Co oferujemy" 
          subtitle="Zajęcia dopasowane do każdego wieku i poziomu zaawansowania."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <OfferCard key={index} title={offer.title} items={offer.items} />
          ))}
        </div>

        <div className="mt-24 p-12 bg-secondary text-center">
          <h3 className="text-2xl font-bold mb-4 tracking-tight">Nie wiesz, który kurs wybrać?</h3>
          <p className="text-foreground/60 mb-8 max-w-xl mx-auto leading-loose">
            Skontaktuj się z nami, a pomożemy Ci dobrać zajęcia idealnie dopasowane do Twoich potrzeb i poziomu.
          </p>
          <a
            href="/kontakt"
            className="inline-block px-8 py-4 bg-primary text-white font-bold hover:bg-primary/90 transition-all rounded-sm"
          >
            Skonsultuj się z nami
          </a>
        </div>
      </div>
    </div>
  );
}
