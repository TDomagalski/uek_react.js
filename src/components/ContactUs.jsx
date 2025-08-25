import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/section_bg01.jpg')" }}
    >
      <div className="container relative z-10 px-8 py-14">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3 md:gap-12">
          {/* Tekst */}
          <div className="col-span-1 space-y-8 p-12 text-center md:col-span-2 md:text-left">
            <h3 className="text-2xl font-semibold sm:text-3xl md:text-5xl">
              <span>Porozmawiajmy o Twoim projekcie</span>
            </h3>
            <p className="text-lg sm:text-2xl md:text-3xl">
              Szukasz skutecznej strony internetowej, lepszej widoczności w Google albo treści,
              które przyciągają klientów? Napisz do mnie – wspólnie stworzymy rozwiązanie dopasowane
              do Twoich celów biznesowych.
            </p>
          </div>

          {/* Przycisk */}
          <div className="col-span-1 space-x-8 text-center">
            <div className="mt-auto pt-8 md:pt-0">
              <Link to="/kontakt">
                <div
                  className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl border-2 border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Poznaj nasze usługi web design i SEO"
                >
                  <span className="relative z-10">Kontakt</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
