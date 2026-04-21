"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-6"
          >
            <Image src="/logo.png" alt="CEL Creative English logo" width={140} height={140} className="object-contain" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="mb-4"
          >
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-foreground/50">
              PONAD 15 LAT DOŚWIADCZENIA | EST. 2008
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-foreground leading-[1.1] mb-6"
          >
            Angielski, który <br />
            <span className="text-primary">otwiera drzwi.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-foreground/80 leading-loose mb-10 max-w-2xl mx-auto"
          >
            Szkoła języka angielskiego w Łowiczu, która od 2008 roku pomaga skutecznie przełamywać bariery komunikacyjne. Nasze autorskie metody nauczania prowadzą do realnych wyników i sukcesów na egzaminach CAE.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/kontakt"
              className={cn(
                buttonVariants({ variant: "default" }),
                "px-8 py-6 text-base font-bold bg-primary hover:bg-primary/90 text-white rounded-none border-none transition-all h-auto"
              )}
            >
              Zapisz się
            </Link>
            <Link
              href="/o-nas"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "px-8 py-6 text-base font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-none transition-all h-auto"
              )}
            >
              Dowiedz się więcej
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Background element - subtle sharp lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary -z-10 hidden lg:block" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
    </section>
  );
}
