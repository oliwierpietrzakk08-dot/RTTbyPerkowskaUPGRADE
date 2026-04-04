import { Check } from "lucide-react";

const reasons = [
  {
    title: "Doświadczeni lektorzy z pasją",
    description: "Nasi nauczyciele to profesjonaliści, którzy kochają swoją pracę i zarażają entuzjazmem do nauki języka.",
  },
  {
    title: "Nauka odbywa się w grupach",
    description: "Kameralne grupy pozwalają na indywidualne podejście do każdego ucznia i lepsze skupienie na rozwoju.",
  },
  {
    title: "Domowa, przytulna atmosfera",
    description: "Uczymy w miejscu, gdzie każdy czuje się swobodnie, co sprzyja szybszemu przyswajaniu wiedzy.",
  },
];

export default function WhyRTT() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-none">
                <Check className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                {reason.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-loose">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
