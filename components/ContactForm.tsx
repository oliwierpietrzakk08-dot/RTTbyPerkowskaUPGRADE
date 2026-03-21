import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Loader2, AlertCircle } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Wystąpił błąd podczas wysyłania formularza.');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Błąd wysyłania formularza:", err);
      setError(err.message || 'Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.');
    } finally {
      setIsSubmitting(false);
    }
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold tracking-tight mb-2 uppercase">Dziękujemy!</h3>
          <p className="text-sm text-foreground/50 leading-loose">
            Twoje zgłoszenie zostało wysłane. Skontaktujemy się z Tobą w ciągu 24 godzin.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline" 
            className="mt-8 rounded-none border-primary text-primary hover:bg-primary hover:text-white"
          >
            Wyślij kolejną wiadomość
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-sm flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>{error}</p>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-xs font-bold uppercase tracking-widest text-foreground/70">Imię i nazwisko *</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Jan Kowalski"
              required
              disabled={isSubmitting}
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
                placeholder="twoj@email.com"
                required
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
                className="rounded-none border-border focus:border-primary focus:ring-0 h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="interest" className="text-xs font-bold uppercase tracking-widest text-foreground/70">Interesuje mnie *</Label>
              <Select name="interest" required disabled={isSubmitting}>
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
            <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-foreground/70">Wiadomość *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Twoja wiadomość..."
              required
              disabled={isSubmitting}
              className="rounded-none border-border focus:border-primary focus:ring-0 min-h-[120px]"
            />
          </div>

          <div className="flex items-start space-x-3 pt-2">
            <Checkbox id="terms" name="terms" required disabled={isSubmitting} className="mt-1 rounded-none data-[state=checked]:bg-primary" />
            <Label
              htmlFor="terms"
              className="text-xs text-foreground/60 leading-relaxed cursor-pointer"
            >
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu oraz przedstawienia oferty szkoły języka angielskiego RTT by Perkowska. *
            </Label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-primary/90 rounded-none border-none transition-all mt-4 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Wysyłanie...
              </>
            ) : (
              "Wyślij zgłoszenie"
            )}
          </Button>
          
          <p className="text-[10px] text-foreground/40 text-center italic">
            * pola wymagane
          </p>
        </form>
      )}
    </div>
  );
}
