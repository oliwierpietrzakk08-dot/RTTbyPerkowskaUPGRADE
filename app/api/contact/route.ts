import { NextResponse } from 'next/server';
// import { Resend } from 'resend';
// import { supabase } from '@/lib/supabase';

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    return NextResponse.json({ message: "Form disabled for now" }, { status: 200 });
  } catch (error) {
    console.error('Błąd w endpointcie kontaktu:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas przetwarzania Twojego zgłoszenia.' },
      { status: 500 }
    );
  }
}

