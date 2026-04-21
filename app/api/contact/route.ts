import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = 'rttbyperkowska@gmail.com';

const interestLabels: Record<string, string> = {
  'kurs-grupowy': 'Kurs grupowy',
  'indywidualne': 'Zajęcia indywidualne',
  'egzamin-cae': 'Egzamin CAE',
  'matura': 'Matura',
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, studentAge, interest, message } = body;

    if (!fullName || !email || !phone || !studentAge || !interest || !message) {
      return NextResponse.json({ error: 'Brakujące pola formularza.' }, { status: 400 });
    }

    const firstName = fullName.split(' ')[0];
    const year = new Date().getFullYear();

    await Promise.all([
      resend.emails.send({
        from: 'CEL Creative English <onboarding@resend.dev>',
        to: OWNER_EMAIL,
        subject: `📬 Nowe zgłoszenie: ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
            <div style="background: #0D1B3E; padding: 24px 32px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 1px;">CEL Creative English</h1>
              <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 13px;">Nowe zgłoszenie z formularza</p>
            </div>
            <div style="padding: 32px; background: #ffffff;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 40%;">Imię i nazwisko</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #0D1B3E;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">E-mail</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #0D1B3E;"><a href="mailto:${email}" style="color: #0D1B3E;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Telefon</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #0D1B3E;"><a href="tel:${phone}" style="color: #0D1B3E;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Wiek ucznia</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #0D1B3E;">${studentAge} lat</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Zainteresowanie</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #C9A227;">${interestLabels[interest] ?? interest}</td>
                </tr>
              </table>
              <div style="margin-top: 24px;">
                <p style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Wiadomość</p>
                <p style="background: #f9f7f0; padding: 16px; border-left: 3px solid #0D1B3E; color: #0D1B3E; line-height: 1.6; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            <div style="background: #f9f7f0; padding: 16px 32px; text-align: center;">
              <p style="color: #9ca3af; font-size: 11px; margin: 0;">© ${year} CEL Creative English · Łowicz</p>
            </div>
          </div>
        `,
      }),

      resend.emails.send({
        from: 'CEL Creative English <onboarding@resend.dev>',
        to: email,
        subject: `Dziękujemy za kontakt, ${firstName}! 🎓`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
            <div style="background: #0D1B3E; padding: 32px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0 0 4px; font-size: 22px; letter-spacing: 1px;">CEL Creative English</h1>
              <p style="color: rgba(255,255,255,0.5); margin: 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Łowicz · est. 2008</p>
            </div>

            <div style="padding: 40px 32px; background: #ffffff;">
              <h2 style="color: #0D1B3E; font-size: 24px; margin: 0 0 16px;">Cześć, ${firstName}! 👋</h2>
              <p style="color: #4b5563; line-height: 1.8; margin: 0 0 16px;">
                Dziękujemy za przesłanie zgłoszenia. Otrzymaliśmy Twoją wiadomość i już wiemy, że interesujesz się: <strong style="color: #0D1B3E;">${interestLabels[interest] ?? interest}</strong>.
              </p>
              <p style="color: #4b5563; line-height: 1.8; margin: 0 0 32px;">
                Skontaktujemy się z Tobą tak szybko jak to możliwe — zazwyczaj w ciągu jednego dnia roboczego. Jeśli masz pilne pytanie, możesz do nas zadzwonić bezpośrednio.
              </p>

              <div style="background: #f9f7f0; border-left: 3px solid #C9A227; padding: 20px 24px; margin-bottom: 32px;">
                <p style="margin: 0 0 8px; color: #0D1B3E; font-weight: bold; font-size: 14px;">📞 Telefon</p>
                <a href="tel:797124446" style="color: #0D1B3E; font-size: 18px; font-weight: bold; text-decoration: none;">797 124 446</a>
                <p style="margin: 12px 0 8px; color: #0D1B3E; font-weight: bold; font-size: 14px;">📍 Adres</p>
                <p style="margin: 0; color: #6b7280; font-size: 14px;">ul. Zduńska 48, lok. 4<br>99-400 Łowicz</p>
              </div>

              <p style="color: #4b5563; line-height: 1.8; margin: 0; font-size: 14px;">
                Do zobaczenia wkrótce — czekamy, by pomóc Ci osiągnąć cele językowe! 🚀
              </p>
            </div>

            <div style="background: #0D1B3E; padding: 24px 32px; text-align: center;">
              <p style="color: rgba(255,255,255,0.4); font-size: 11px; margin: 0;">
                © ${year} CEL Creative English · Łowicz · Ta wiadomość została wysłana automatycznie.
              </p>
            </div>
          </div>
        `,
      }),
    ]);

    return NextResponse.json({ message: 'Zgłoszenie wysłane.' }, { status: 200 });
  } catch (error) {
    console.error('Błąd wysyłania maila:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie.' },
      { status: 500 }
    );
  }
}
