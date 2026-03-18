"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Facebook } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/o-nas", label: "O nas" },
  { href: "/oferta", label: "Oferta" },
  { href: "/egzaminy", label: "Egzaminy" },
  { href: "/cennik", label: "Cennik" },
  { href: "/opinie", label: "Opinie" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        isScrolled ? "border-b border-border py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="RTT by Perkowska"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-[#1B2D6E] font-bold text-base md:text-lg tracking-tight">
                RTT by Perkowska
              </span>
            </Link>

            <Link
              href="https://www.facebook.com/rttbyperkowska/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#1877F2] border border-transparent hover:border-[#1877F2] transition-all rounded-sm"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 fill-current" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all hover:opacity-70 ${
                    isActive
                      ? "text-foreground relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-destructive"
                      : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-bold p-2 ${
                    isActive ? "text-destructive" : "text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
