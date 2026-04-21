"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Facebook, Instagram, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const ofertaLinks = [
  { href: "/oferta/grupy", label: "Nauka w grupach (stacjonarnie)" },
  { href: "/oferta/online", label: "Nauka online (Zoom)" },
  { href: "/oferta/cae", label: "Certyfikat CAE" },
  { href: "/oferta/matura", label: "Przygotowanie do matury" },
];

const navLinks = [
  { href: "/o-nas", label: "O nas" },
  { href: "/opinie", label: "Opinie" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [ofertaOpen, setOfertaOpen] = useState(false);
  const [mobileOfertaOpen, setMobileOfertaOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOfertaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOfertaOpen(false);
    setMobileOfertaOpen(false);
  }, [pathname]);

  const isOfertaActive = pathname.startsWith("/oferta");

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
                  alt="CEL Creative English"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-[#0D1B3E] font-bold text-base md:text-lg tracking-tight">
                CEL Creative English
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="https://www.facebook.com/rttbyperkowska/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 bg-[#1877F2] text-white rounded-sm hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 fill-current" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-sm hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Oferta dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOfertaOpen((v) => !v)}
                className={`flex items-center gap-1 text-sm font-medium transition-all hover:opacity-70 ${
                  isOfertaActive
                    ? "text-foreground relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-destructive"
                    : "text-foreground/80"
                }`}
              >
                Oferta
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${ofertaOpen ? "rotate-180" : ""}`}
                />
              </button>

              {ofertaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-border shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
                  {ofertaLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-5 py-3 text-sm transition-colors hover:bg-secondary hover:text-foreground border-b border-border last:border-b-0 ${
                        pathname === link.href
                          ? "text-primary font-bold"
                          : "text-foreground/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
          <div className="flex flex-col p-4 gap-1">
            {/* Oferta accordion */}
            <button
              onClick={() => setMobileOfertaOpen((v) => !v)}
              className={`flex items-center justify-between text-lg font-bold p-2 w-full text-left ${
                isOfertaActive ? "text-destructive" : "text-primary"
              }`}
            >
              Oferta
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileOfertaOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileOfertaOpen && (
              <div className="flex flex-col pl-4 gap-1 mb-2">
                {ofertaLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium p-2 ${
                      pathname === link.href ? "text-destructive" : "text-foreground/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-bold p-2 ${
                    isActive ? "text-destructive" : "text-primary"
                  }`}
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
