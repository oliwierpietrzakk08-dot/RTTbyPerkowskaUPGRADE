"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, BadgeCheck } from "lucide-react";

// Google G Logo SVG
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l2.48-1.99.2-.85z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const reviews = [
  {
    initial: "A",
    name: "Ania K.",
    date: "7 miesięcy temu",
    text: "Przyszłam z dwóją, po pół roku miałam 5 na koniec podstawówki. Ta metoda naprawdę działa, a p. Krystyna potrafi wytłumaczyć wszystko prosto i bez stresu!",
    color: "bg-blue-500",
  },
  {
    initial: "M",
    name: "Marek P.",
    date: "8 miesięcy temu",
    text: "Przerobiłem masę korków i nic. Dopiero tutaj, w RTT, zrozumiałem gramatykę. System jest stały, ale podejście bardzo indywidualne. Polecam na 100%.",
    color: "bg-green-600",
  },
  {
    initial: "K",
    name: "Karolina S.",
    date: "10 miesięcy temu",
    text: "Najlepsza szkoła w Łowiczu! Chodziłam do grupy CAE i zdałam egzamin bez problemu. Atmosfera super, a wyniki uczniów mówią same za siebie.",
    color: "bg-purple-500",
  },
  {
    initial: "P",
    name: "Paweł B.",
    date: "11 miesięcy temu",
    text: "Super zajęcia online! Pełen profesjonalizm na Zoomie. Uczę się ze znajomymi w grupie i postępy są niesamowite. Polecam każdemu!",
    color: "bg-red-500",
  },
];

export default function ReviewsSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive items count
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div className="relative w-full max-w-6xl mx-auto px-12 mt-12 mb-16">
      {/* Prev Arrow */}
      <button
        onClick={prev}
        disabled={startIndex === 0}
        aria-label="Poprzednie opinie"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-foreground/50 hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Arrow */}
      <button
        onClick={next}
        disabled={startIndex === maxIndex}
        aria-label="Następne opinie"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-foreground/50 hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider viewport */}
      <div className="overflow-hidden w-full py-4">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
          }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="px-3 shrink-0"
              style={{ width: `${100 / visibleCount}%` }}
            >
              {/* Trustindex-style Google Card */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 flex flex-col h-full items-start text-left">
                {/* Header: Initial, Name, Google Logo */}
                <div className="flex items-center justify-between w-full mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-lg shrink-0 ${r.color}`}
                    >
                      {r.initial}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900 text-[15px] leading-tight">
                        {r.name}
                      </span>
                      <span className="text-gray-500 text-xs mt-0.5">
                        {r.date}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0 -mt-2">
                    <GoogleIcon />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star
                        key={s}
                        className="w-[18px] h-[18px] fill-[#fbbc04] text-[#fbbc04]"
                      />
                    ))}
                  </div>
                  <BadgeCheck className="w-5 h-5 text-blue-500 fill-blue-50" />
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed text-left">
                  {r.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
