import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, message, studentAge, interest } = body;

    // 1. Walidacja danych
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Brak wymaganych pól (imię, email lub wiadomość)' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('pl-PL', {
      timeZone: 'Europe/Warsaw',
      hour12: false,
    });

    // 2. Zapis do Supabase
    // Uwaga: Zapisujemy podstawowe dane do tabeli contacts zgodnie z wytycznymi.
    // Jeśli chcemy zapisać też interest/age, można je dodać do wiadomości lub rozszerzyć tabelę.
    const { error: dbError } = await supabase
      .from('contacts')
      .insert([
        { 
          name: fullName, 
          email, 
          phone: phone || null, 
          message: `Interesuje mnie: ${interest}\nWiek ucznia: ${studentAge}\n\nWiadomość:\n${message}` 
        }
      ]);

    if (dbError) {
      console.error('Błąd zapisu do bazy danych:', dbError);
      // Nie przerywamy, jeśli mail ma zostać wysłany, ale zwrócimy to jako informację?
      // Zazwyczaj lepiej przerwać lub zalogować. Wymaganie mówi "Zapisuje zapytanie", więc to ważne.
    }

    // 3. Email do Pani Krystyny
    const { error: ownerEmailError } = await resend.emails.send({
      from: 'RTT by Perkowska <onboarding@resend.dev>', // W produkcji zmienić na zweryfikowaną domenę
      to: 'rttbyperkowska@gmail.com',
      subject: `Nowe zgłoszenie od: ${fullName}`,
      html: `
        <h2>Nowe zapytanie z formularza kontaktowego</h2>
        <p><strong>Imię i nazwisko:</strong> ${fullName}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Nie podano'}</p>
        <p><strong>Wiek ucznia:</strong> ${studentAge}</p>
        <p><strong>Zainteresowanie:</strong> ${interest}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr />
        <p><small>Wysłano: ${timestamp}</small></p>
      `,
    });

    if (ownerEmailError) {
      console.error('Błąd wysyłki maila do właściciela:', ownerEmailError);
    }

    // 4. Email powitalny do klienta
    const { error: clientEmailError } = await resend.emails.send({
      from: 'RTT by Perkowska <onboarding@resend.dev>',
      to: email,
      subject: 'Dziękujemy za kontakt - RTT by Perkowska',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #c9a227;">Dzień dobry!</h2>
          <p>Dziękujemy za przesłanie zgłoszenia do naszej szkoły języka angielskiego <strong>RTT by Perkowska</strong>.</p>
          <p>Otrzymaliśmy Twoją wiadomość i postaramy się odpowiedzieć na nią w ciągu najbliższych <strong>24 godzin</strong>.</p>
          <p>Jeśli Twoje zgłoszenie dotyczy zapisów na zajęcia, skontaktujemy się telefonicznie lub mailowo, aby omówić szczegóły.</p>
          <p>Cieszymy się, że chcesz do nas dołączyć!</p>
          <br />
          <p>Z poważaniem,<br />Zespół RTT by Perkowska</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #777;">
            <strong>RTT by Perkowska</strong><br />
            ul. Zdunska 48 lok. 4, 99-400 Łowicz<br />
            Tel: 797 124 446 | E-mail: rttbyperkowska@gmail.com
          </p>
        </div>
      `,
    });

    if (clientEmailError) {
      console.error('Błąd wysyłki maila do klienta:', clientEmailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Błąd w endpointcie kontaktu:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas przetwarzania Twojego zgłoszenia.' },
      { status: 500 }
    );
  }
}
