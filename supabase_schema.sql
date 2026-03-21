-- Tabela contacts do zapisywania zapytań z formularza
CREATE TABLE IF NOT EXISTS contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Przykładowe zapytanie do testów (opcjonalne)
-- INSERT INTO contacts (name, email, phone, message) 
-- VALUES ('Jan Kowalski', 'jan@example.com', '123456789', 'Dzień dobry, chciałbym zapisać dziecko na kurs.');
