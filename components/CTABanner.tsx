"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CTABanner() {
  return (
    <section className="py-24 bg-[#1B2D6E] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Gotowy na swój <br className="hidden md:block" />
            <span className="text-[#CC2229]">pierwszy krok?</span>
          </h2>
          <Link
            href="/kontakt"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "px-10 py-7 text-lg font-bold bg-white text-[#1B2D6E] hover:bg-gray-100 rounded-none border-none transition-all shadow-none h-auto"
            )}
          >
            Skontaktuj się
          </Link>
        </div>
      </div>
    </section>
  );
}
