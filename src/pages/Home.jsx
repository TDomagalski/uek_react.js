import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Sekcja Hero */}
      <section
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/homepage/top-img.png')" }}
      >
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-screen grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16">
            <div className="rounded-4xl space-y-8 border border-gray-300 bg-amber-50 p-14">
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                <span className="text-gray-800">Tworzymy strony,</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  które pracują na wynik
                </span>
              </h1>

              <div className="space-y-4">
                <p className="max-w-xl text-xl leading-relaxed text-gray-600 lg:text-2xl">
                  <strong>Design + SEO</strong> = przewaga nad konkurencją.
                </p>
                <p className="max-w-xl text-xl leading-relaxed text-gray-600 lg:text-2xl">
                  Strona internetowa powinna nie tylko wyglądać dobrze, ale przede wszystkim{' '}
                  <span className="font-semibold text-purple-600">realnie wspierać sprzedaż</span>.
                </p>
              </div>

              <div className="pt-6">
                <Link to="/kontakt">
                  <div
                    className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
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

      {/* Sekcja o projektowaniu */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-screen grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-full min-h-[300px] w-full sm:min-h-[400px] lg:min-h-full">
              <img
                src="/homepage/img-1.png"
                alt="Projektowanie nowoczesnych stron internetowych w React.js, Next.js i Astro.js"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-tight sm:text-3xl lg:text-5xl">
                Projektujemy nowoczesne strony w React, Next.js i Astro
              </h2>
              <p className="max-w-xl text-xl leading-relaxed text-gray-600 lg:text-2xl">
                Tworzymy <span className="font-semibold text-purple-600">szybkie</span>,{' '}
                <span className="font-semibold text-purple-600">responsywne</span> i{' '}
                <span className="font-semibold text-purple-600">skalowalne strony internetowe</span>{' '}
                w technologiach nowej generacji. Stawiamy na{' '}
                <span className="font-semibold text-purple-600">wydajność</span>,{' '}
                <span className="font-semibold text-purple-600">UX</span> i nowoczesny{' '}
                <span className="font-semibold text-purple-600">web design</span> – od landing
                page'y po zaawansowane aplikacje.
              </p>

              <div className="pt-6">
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

      {/* Sekcja SEO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-screen grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 space-y-8 lg:order-1">
              <h2 className="text-4xl font-bold leading-tight sm:text-3xl lg:text-5xl">
                Skuteczne SEO on-site i off-site dla Twojej marki
              </h2>
              <p className="max-w-xl text-xl leading-relaxed text-gray-600 lg:text-2xl">
                Optymalizujemy strony pod kątem{' '}
                <span className="font-semibold text-purple-600">SEO technicznego</span>,{' '}
                <span className="font-semibold text-purple-600">treściowego</span> i{' '}
                <span className="font-semibold text-purple-600">strategicznego</span>. Zajmujemy się{' '}
                <span className="font-semibold text-purple-600">audytami SEO</span>,{' '}
                <span className="font-semibold text-purple-600">link buildingiem</span>,{' '}
                <span className="font-semibold text-purple-600">content marketingiem</span> oraz{' '}
                <span className="font-semibold text-purple-600">lokalnym pozycjonowaniem</span>.
              </p>

              <div className="pt-6">
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

            <div className="relative order-1 h-full min-h-[300px] w-full sm:min-h-[400px] lg:order-2 lg:min-h-full">
              <img
                src="/homepage/img-2.png"
                alt="Wdrażamy kompleksowo SEO on-site i off-site do Twojego projektu"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja usług */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="container relative z-10 px-4 text-center sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight sm:text-3xl lg:text-5xl">
              Budujemy silną obecność Twojej marki w internecie
            </h2>
            <p className="max-w-full text-xl leading-relaxed text-gray-600 lg:text-2xl">
              Oferujemy kompleksowe wsparcie w zakresie{' '}
              <span className="font-semibold text-purple-600">
                projektowania stron internetowych
              </span>
              ,<span className="font-semibold text-purple-600">pozycjonowania SEO</span> oraz{' '}
              <span className="font-semibold text-purple-600">content marketingu</span>. Łączymy
              strategię, design i widoczność, aby pomóc Twojej firmie przyciągać klientów i
              zwiększać sprzedaż online.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-12 py-20 sm:px-20 lg:grid-cols-3 lg:px-0">
            {/* Box 1 */}
            <div className="flex h-full flex-col space-y-4 rounded-2xl border border-gray-300 p-10">
              <div className="flex-grow space-y-6">
                <h3 className="text-2xl font-semibold">Projektowanie Stron WWW</h3>
                <p className="text-gray-600">
                  Profesjonalne i nowoczesne projektowanie stron internetowych.
                </p>
                <ul className="list-disc space-y-3 pl-9 text-left font-bold text-white">
                  <li>Szybkie i wydajne strony</li>
                  <li>Responsywny design</li>
                  <li>Przyjazne SEO</li>
                  <li>Intuicyjny interfejs</li>
                </ul>
              </div>
              <div className="mt-auto pt-8">
                <Link to="/uslugi">
                  <div className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50">
                    <span className="relative z-10">Usługi</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex h-full flex-col space-y-4 rounded-2xl border border-gray-300 px-10 py-10">
              <div className="flex-grow space-y-6">
                <h3 className="text-2xl font-semibold">Pozycjonowanie SEO</h3>
                <p className="text-gray-600">
                  Optymalizacja stron internetowych zwiększająca widoczność.
                </p>
                <ul className="list-disc space-y-3 pl-9 text-left font-bold text-white">
                  <li>Analityka i audyt SEO</li>
                  <li>Optymalizacja treści pod SEO</li>
                  <li>Monitoring pozycji w Google</li>
                  <li>Budowa profilu linków</li>
                </ul>
              </div>
              <div className="mt-auto pt-8">
                <Link to="/uslugi">
                  <div className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50">
                    <span className="relative z-10">Usługi</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex h-full flex-col space-y-4 rounded-2xl border border-gray-300 px-10 py-10">
              <div className="flex-grow space-y-6">
                <h3 className="text-2xl font-semibold">Content Marketing</h3>
                <p className="text-gray-600">
                  Tworzenie wartościowych treści, które budują zaufanie.
                </p>
                <ul className="list-disc space-y-3 pl-9 text-left font-bold text-white">
                  <li>Strategia contentu</li>
                  <li>Prowadzenie blogów</li>
                  <li>Social media</li>
                  <li>Marketing wideo</li>
                </ul>
              </div>
              <div className="mt-auto pt-8">
                <Link to="/uslugi">
                  <div className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50">
                    <span className="relative z-10">Usługi</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
