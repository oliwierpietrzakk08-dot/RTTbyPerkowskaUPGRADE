import SectionHeader from "@/components/SectionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nas - RTT by Perkowska",
  description: "Poznaj szkołę RTT by Perkowska. Dowiedz się więcej o naszej misji, wartościach i Krystynie Perkowskiej.",
};

const values = [
  { title: "Pasja", description: "Nauczanie to nasza misja, którą realizujemy z pełnym zaangażowaniem." },
  { title: "Skuteczność", description: "100% zdawalności egzaminów CAE to dowód na wysoką jakość naszych kursów." },
  { title: "Indywidualne podejście", description: "Dostosowujemy tempo i metodę pracy do potrzeb i możliwości każdego ucznia." },
];

export default function AboutPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Miejsce nieograniczonych możliwości" 
        />
        
        <div className="max-w-4xl">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-12">
            Witaj w miejscu nieograniczonych możliwości, gdzie przyswajanie języka angielskiego odbywa się przy pomocy doświadczonych lektorów z pasją, którzy w domowej atmosferze rozbudzą Twoje zdolności językowe i sprawią, że nie tylko będziesz w stanie zdać wszelkie egzaminy na wysokim poziomie, ale również komunikować się swobodnie w języku angielskim. 
          </p>
          <p className="text-lg text-foreground/70 leading-loose mb-20">
            Przez starannie przygotowaną metodę nauczania Krystyny Perkowskiej poszerzysz swoje horyzonty poznając zarówno świat jak i samego siebie.
          </p>
        </div>

        {/* Sekcja Krystyna Perkowska */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative aspect-[4/5] bg-secondary flex items-center justify-center">
            <span className="text-foreground/40 font-bold uppercase tracking-widest text-sm">Zdjęcie wkrótce</span>
            {/* <Image src="/path-to-photo.jpg" alt="Krystyna Perkowska" fill className="object-cover" /> */}
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold tracking-tight">Krystyna Perkowska</h3>
            <p className="text-sm font-bold uppercase tracking-widest text-destructive">Założycielka i Lektorka</p>
            <p className="text-foreground/70 leading-loose">
              Z wieloletnim doświadczeniem w nauczaniu i przygotowywaniu uczniów do egzaminów Cambridge, Krystyna stworzyła szkołę, która jest czymś więcej niż tylko kursem językowym. To miejsce wsparcia, inspiracji i realnych sukcesów.
            </p>
          </div>
        </div>

        {/* Wartości */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-border">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h4 className="text-xl font-bold tracking-tight">{value.title}</h4>
              <p className="text-sm text-foreground/60 leading-loose">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
