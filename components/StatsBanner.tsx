const stats = [
  "2 LEKCJE TYGODNIOWO",
  "100% SKUTECZNOŚĆ NA EGZAMINACH CAE",
  "WIEK UCZNIÓW: OD 6 DO 19 LAT",
];

export default function StatsBanner() {
  return (
    <section className="py-14 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2 px-4">
              <span className="text-base md:text-lg font-bold uppercase tracking-widest text-white">
                {stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
