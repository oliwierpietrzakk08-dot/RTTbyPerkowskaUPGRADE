// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.SUPABASE_URL || '';
// const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

// if (!supabaseUrl || !supabaseAnonKey) {
//   console.warn('Brak zmiennych środowiskowych Supabase (SUPABASE_URL, SUPABASE_ANON_KEY).');
// }

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Disabled backend to allow frontend-only build without env vars
export const supabase = {
  from: () => ({
    insert: () => Promise.resolve({ error: null })
  })
} as any;
