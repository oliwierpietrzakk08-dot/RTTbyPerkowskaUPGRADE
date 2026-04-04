import Link from "next/link";
import Image from "next/image";
import { Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Kolumna 1: Logo i opis */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="RTT Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">RTT by Perkowska</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs leading-loose">
              Szkoła języka angielskiego w Łowiczu prowadzona z pasją, otwierająca drzwi do nieogarniczonych możliwości językowych.
            </p>
          </div>

          {/* Kolumna 2: Nawigacja */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#CC2229]">Strona</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/o-nas" className="text-sm text-gray-300 hover:text-white transition-colors">O nas</Link>
              <Link href="/oferta" className="text-sm text-gray-300 hover:text-white transition-colors">Oferta</Link>
              <Link href="/opinie" className="text-sm text-gray-300 hover:text-white transition-colors">Opinie</Link>
              <Link href="/faq" className="text-sm text-gray-300 hover:text-white transition-colors">FAQ</Link>
              <Link href="/kontakt" className="text-sm text-gray-300 hover:text-white transition-colors">Kontakt</Link>
            </nav>
          </div>

          {/* Kolumna 3: Kontakt i Social Media */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#CC2229]">Kontakt</h3>
            <div className="text-sm text-gray-300 flex flex-col gap-1">
              <p>ul. Zdunska 48, lok. 4</p>
              <p>99-400 Łowicz</p>
              <p className="mt-2">797 124 446</p>
              <p>rttbyperkowska@gmail.com</p>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <Link
                href="https://www.facebook.com/rttbyperkowska/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-700 hover:border-gray-500 transition-all rounded-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} RTT by Perkowska. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
