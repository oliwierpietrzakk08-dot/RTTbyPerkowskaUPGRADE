import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import { Facebook, Instagram, MapPin, Phone, Mail, Globe } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - CEL Creative English",
  description: "Skontaktuj się z nami. Zadzwoń lub wyślij wiadomość, aby zarezerwować miejsce w grupie na kursie języka angielskiego lub zajęciach online.",
};

export default function ContactPage() {
  return (
    <div className="py-20 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Centered Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-destructive mb-4">
            Jesteśmy do Twojej dyspozycji
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Skontaktuj się z nami
          </h1>
          <div className="h-[2px] bg-destructive w-20 mx-auto mb-8" />
          <p className="text-lg text-foreground/70 leading-loose">
            Chcesz zapisać swoje dziecko na zajęcia lub masz pytania? 
            Zadzwoń do nas bezpośrednio lub skorzystaj z poniższego formularza.
          </p>
        </div>

        {/* Big Side-By-Side Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-24 max-w-2xl mx-auto">
          <a 
            href="tel:797124446"
            className="w-full sm:w-auto px-10 py-5 bg-primary text-white font-bold text-sm tracking-widest uppercase hover:bg-primary/90 transition-all text-center rounded-sm shadow-md"
          >
            Zadzwoń Teraz
          </a>
          <a 
            href="#formularz"
            className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-border text-foreground font-bold text-sm tracking-widest uppercase hover:border-primary transition-all text-center rounded-sm shadow-sm"
          >
            Wyślij Wiadomość
          </a>
        </div>

        {/* Centered Formularz */}
        <div id="formularz" className="max-w-2xl mx-auto bg-white p-8 md:p-12 border border-border shadow-sm mb-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold tracking-tight uppercase">Formularz Zapisów</h3>
            <p className="text-sm text-foreground/50 mt-3">Odpowiadamy zazwyczaj w ciągu 24 godzin.</p>
          </div>
          <ContactForm />
        </div>

        {/* Clean, Centered Contact Details Block */}
        <div className="max-w-4xl mx-auto text-center border-t border-border pt-20">
          <h3 className="text-xl font-bold tracking-tight mb-12 uppercase">Dane Kontaktowe</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Phone & Email */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">Telefon</p>
                <p className="text-lg font-medium">797 124 446</p>
              </div>
              <div className="mt-4">
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">E-mail</p>
                <p className="text-base font-medium">rttbyperkowska@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">Adres Szkoły</p>
                <p className="text-base font-medium leading-relaxed">
                  ul. Zdunska 48, lok. 4<br />
                  99-400 Łowicz
                </p>
              </div>
              <div className="mt-4">
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">Godziny</p>
                <p className="text-sm text-foreground/70">Zajęcia ustalane indywidualnie</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">Znajdź nas w sieci</p>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <Link 
                    href="https://www.facebook.com/rttbyperkowska/" 
                    target="_blank" 
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center group-hover:opacity-80 transition-opacity">
                      <Facebook className="w-5 h-5 fill-current" />
                    </div>
                  </Link>

                  <Link 
                    href="#" 
                    target="_blank" 
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full flex items-center justify-center group-hover:opacity-80 transition-opacity">
                      <Instagram className="w-5 h-5" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
