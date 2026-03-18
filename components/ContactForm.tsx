"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Walidacja i logowanie
    console.log("Formularz wysłany:", data);
    
    // Symulacja sukcesu
    setIsSubmitted(true);
    
    // Reset po 3 sek
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="bg-white border border-border p-8 md:p-12">
      {isSubmitted ? (
        <div className="text-center py-20 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-none mx-auto mb-6">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold tracking-tight mb-2 uppercase">Dziękujemy!</h3>
          <p className="text-sm text-foreground/50 leading-loose">
            Twoje zgłoszenie zostało wysłane. Skontaktujemy się z Tobą najszybciej jak to możliwe.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-xs font-bold uppercase tracking-widest text-foreground/70">Imię i nazwisko *</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Jan Kowalski"
              required
              className="rounded-none border-border focus:border-primary focus:ring-0 h-12"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-foreground/70">Adres e-mail *</Label>
              <Input
                id="email"
                name="email"
                type="email"
              placeholder="rttbyperkowska@gmail.com"
                required
                className="rounded-none border-border focus:border-primary focus:ring-0 h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-foreground/70">Numer telefonu *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
              placeholder="797 124 446"
                required
                className="rounded-none border-border focus:border-primary focus:ring-0 h-12"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="studentAge" className="text-xs font-bold uppercase tracking-widest text-foreground/70">Wiek ucznia (10-20 lat) *</Label>
              <Input
                id="studentAge"
                name="studentAge"
                type="number"
                min={10}
                max={20}
                required
                className="rounded-none border-border focus:border-primary focus:ring-0 h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="interest" className="text-xs font-bold uppercase tracking-widest text-foreground/70">Interesuje mnie *</Label>
              <Select name="interest" required>
                <SelectTrigger className="rounded-none border-border focus:border-primary focus:ring-0 h-12">
                  <SelectValue placeholder="Wybierz opcję" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-border">
                  <SelectItem value="kurs-grupowy">Kurs grupowy</SelectItem>
                  <SelectItem value="indywidualne">Zajęcia indywidualne</SelectItem>
                  <SelectItem value="egzamin-cea">Egzamin CEA</SelectItem>
                  <SelectItem value="matura">Matura</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-foreground/70">Wiadomość (opcjonalnie)</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Twoja wiadomość..."
              className="rounded-none border-border focus:border-primary focus:ring-0 min-h-[120px]"
            />
          </div>

          <div className="flex items-start space-x-3 pt-2">
            <Checkbox id="terms" name="terms" required className="mt-1 rounded-none data-[state=checked]:bg-primary" />
            <Label
              htmlFor="terms"
              className="text-xs text-foreground/60 leading-relaxed cursor-pointer"
            >
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu oraz przedstawienia oferty szkoły języka angielskiego RTT by Perkowska. *
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full h-14 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-primary/90 rounded-none border-none transition-all mt-4"
          >
            Wyślij zgłoszenie
          </Button>
          
          <p className="text-[10px] text-foreground/40 text-center italic">
            * pola wymagane
          </p>
        </form>
      )}
    </div>
  );
}
