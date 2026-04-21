import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nas - CEL Creative English",
  description:
    "Poznaj szkołę CEL Creative English. Szkoła języka angielskiego w Łowiczu z indywidualnym podejściem i 100% skutecznością na egzaminach CAE.",
};

const blocks = [
  {
    number: "01",
    title: "Nasza misja",
    description:
      "Wierzymy, że język angielski otwiera drzwi — do kariery, do świata i do nowych możliwości. Szkoła CEL Creative English powstała po to, by każdy uczeń, niezależnie od wieku i poziomu zaawansowania, mógł osiągnąć realne, mierzalne rezultaty.",
  },
  {
    number: "02",
    title: "Nasze metody",
    description:
      "Nasz autorski system nauki powstał z własnego doświadczenia — z frustracji latami nieskutecznej nauki i radości z odkrycia metod, które naprawdę działają. To system sprawdzony w praktyce: uczniowie, którzy przez lata nie mogli wyjść ponad dwójkę czy trójkę, w ciągu kilku miesięcy osiągają piątki. Jeśli jedno wytłumaczenie nie działa — szukamy innego. Zawsze.",
  },
  {
    number: "03",
    title: "Nasze wyniki",
    description:
      "Skuteczność stosowanych przez nas metod jest potwierdzona wynikami: 100% uczniów przygotowywanych do egzaminów CAE zdało je z powodzeniem. To dowód na to, że indywidualne podejście naprawdę działa.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">

        {/* Centered page header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Miejsce nieograniczonych możliwości
          </h1>
          <div className="h-[2px] bg-destructive w-20 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-foreground/70 leading-loose">
            Szkoła języka angielskiego w Łowiczu, gdzie indywidualne metody
            nauczania przekładają się na realne sukcesy uczniów w każdym wieku.
          </p>
        </div>

        {/* Owner section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-28">
          {/* Photo */}
          <div className="relative w-full aspect-[4/5] bg-secondary overflow-hidden">
            <Image
              src="/krystyna.jpg"
              alt="Krystyna Perkowska – założycielka CEL Creative English"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <p className="text-xs font-bold uppercase tracking-widest text-destructive">
              Założycielka i Lektorka
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Krystyna Perkowska
            </h2>
            <div className="h-[2px] bg-border w-16" />
            <p className="text-foreground/70 leading-loose">
              Z wieloletnim doświadczeniem w nauczaniu języka angielskiego,
              Krystyna stworzyła szkołę, która jest czymś więcej niż kursem
              językowym. Poprzez indywidualne metody nauczania stosowane
              w naszej szkole, każdy uczeń otrzymuje program dopasowany do
              swoich potrzeb, możliwości i tempa nauki.
            </p>
            <p className="text-foreground/70 leading-loose">
              Wyniki mówią same za siebie — 100% uczniów przygotowywanych
              do egzaminów CAE zdało je z powodzeniem. To efekt konsekwentnie
              stosowanego, sprawdzonego podejścia do nauki, które łączy
              profesjonalizm z domową, przyjazną atmosferą.
            </p>
          </div>
        </div>

        {/* 3 Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {blocks.map((block) => (
            <div
              key={block.number}
              className="bg-secondary p-10 flex flex-col gap-4 border-t-2 border-primary"
            >
              <span className="text-5xl font-bold text-primary/20 tracking-tight leading-none">
                {block.number}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                {block.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-loose">
                {block.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats strip — 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
          <div className="flex flex-col items-center justify-center py-12 px-8 text-center border-b md:border-b-0 md:border-r border-border">
            <span className="text-5xl font-bold text-primary tracking-tight">
              100%
            </span>
            <span className="text-xs uppercase tracking-widest text-foreground/50 mt-2">
              Skuteczności na egzaminach CAE
            </span>
          </div>
          <div className="flex flex-col items-center justify-center py-12 px-8 text-center">
            <span className="text-5xl font-bold text-primary tracking-tight">
              6–19
            </span>
            <span className="text-xs uppercase tracking-widest text-foreground/50 mt-2">
              Wiek uczniów
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
