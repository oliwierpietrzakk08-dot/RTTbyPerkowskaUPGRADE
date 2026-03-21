# Dokumentacja Backend — Formularz Kontaktowy

Ten projekt wykorzystuje **Resend** do wysyłki maili oraz **Supabase** do przechowywania zgłoszeń.

## KROK 1: Konfiguracja Resend (E-maile)
1. Załóż konto na [resend.com](https://resend.com/).
2. Przejdź do sekcji **API Keys** i stwórz nowy klucz (`Add API Key`).
3. Skopiuj klucz i dodaj go do pliku `.env.local` jako `RESEND_API_KEY`.
4. *Opcjonalnie:* Aby maile nie wpadały do spamu i miały własną domenę, dodaj swoją domenę w sekcji **Domains** i zweryfikuj rekordy DNS.

## KROK 2: Konfiguracja Supabase (Baza danych)
1. Załóż projekt na [supabase.com](https://supabase.com/).
2. Wejdź w **SQL Editor** i wklej treść pliku `supabase_schema.sql`, a następnie kliknij **Run**. To stworzy tabelę `contacts`.
3. Przejdź do **Project Settings > API**.
4. Skopiuj **Project URL** i dodaj do `.env.local` jako `SUPABASE_URL`.
5. Skopiuj **anon public key** i dodaj do `.env.local` jako `SUPABASE_ANON_KEY`.

## KROK 3: Zmienne środowiskowe (.env.local)
Upewnij się, że Twój plik `.env.local` zawiera:
```env
RESEND_API_KEY=re_your_api_key
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

## KROK 4: Wdrożenie na Vercel
Jeśli wdrażasz projekt na Vercel:
1. Wejdź w ustawienia projektu na Vercel.
2. Przejdź do **Environment Variables**.
3. Dodaj trzy powyższe zmienne (`RESEND_API_KEY`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`).
4. Uruchom nowy Build/Deploy.

---
**Uwagi techniczne:**
- Endpoint API: `/api/contact` (obsługuje POST).
- Walidacja: Imię, Email i Wiadomość są wymagane.
- Powiadomienia: Mail do właściciela (`rttbyperkowska@gmail.com`) oraz automatyczne potwierdzenie dla klienta.
