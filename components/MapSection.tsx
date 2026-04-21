export default function MapSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">
            Gdzie nas znajdziesz?
          </h2>
          <p className="text-foreground/70 text-base">
            ul. Zdunska 48, lok. 4, 99-400 Łowicz
          </p>
        </div>
        <div className="w-full overflow-hidden border-2 border-primary/20 shadow-lg" style={{ height: "450px" }}>
          <iframe
            title="Lokalizacja CEL Creative English"
            src="https://maps.google.com/maps?q=ul.+Zdunska+48,+99-400+Łowicz,+Poland&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
