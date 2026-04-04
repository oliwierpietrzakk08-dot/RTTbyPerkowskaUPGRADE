import ReviewsSlider from "@/components/ReviewsSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opinie - RTT by Perkowska",
  description: "Przeczytaj opinie naszych uczniów. Zobacz, w jaki sposób nasze indywidualne podejście pomaga osiągać cele na egzaminie CAE.",
};

export default function TestimonialsPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Centered Main Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-destructive mb-4">
            Poznaj ich historię
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Opinie naszych uczniów
          </h1>
          <div className="h-[2px] bg-destructive w-20 mx-auto mb-8" />
          <p className="text-lg text-foreground/70 leading-loose">
            Naszą największą dumą są sukcesy i zadowolenie naszych uczniów. 
            Przeczytaj, co mówią o naszych zajęciach na Google Maps.
          </p>
        </div>
        
        {/* Render our custom slider */}
        <ReviewsSlider />

      </div>
    </div>
  );
}
