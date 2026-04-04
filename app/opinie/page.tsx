import SectionHeader from "@/components/SectionHeader";
import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "A.K.",
    name: "Anna K.",
    text: "[Opinia ucznia zostanie dodana wkrótce]",
    rating: 5,
  },
  {
    initials: "M.W.",
    name: "Michał W.",
    text: "[Opinia ucznia zostanie dodana wkrótce]",
    rating: 5,
  },
  {
    initials: "J.P.",
    name: "Jan P.",
    text: "[Opinia ucznia zostanie dodana wkrótce]",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Co mówią nasi uczniowie" 
          subtitle="Ponad 50 uczniów ze 100% skutecznością. Poznaj ich historię."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testi, index) => (
            <div key={index} className="border border-border p-10 bg-white flex flex-col items-center text-center transition-all hover:border-primary group">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-none">
                {testi.initials}
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-sm text-foreground/50 leading-loose italic mb-10 flex-grow">
                {testi.text}
              </p>
              
              <div className="pt-6 border-t border-border w-full">
                <span className="text-sm font-bold tracking-tight uppercase group-hover:text-primary transition-colors">
                  {testi.name}
                </span>
                <p className="text-[10px] text-foreground/40 uppercase tracking-widest mt-1">Uczeń RTT</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 py-16 px-8 border border-border bg-secondary text-center">
            <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
                <div className="flex flex-col gap-2">
                    <span className="text-4xl md:text-5xl font-bold tracking-tight">50+</span>
                    <span className="text-xs uppercase tracking-widest text-foreground/40">Zadowolonych uczniów</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-4xl md:text-5xl font-bold tracking-tight text-destructive">100%</span>
                    <span className="text-xs uppercase tracking-widest text-foreground/40">Skuteczności CAE</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
