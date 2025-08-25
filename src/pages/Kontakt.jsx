export default function Kontakt() {
  return (
    <>
      {/* Sekcja top */}
      <section className="flex min-h-[500px] items-center justify-center overflow-hidden">
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="relative grid grid-cols-1 items-start justify-start gap-12 md:items-center lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8 p-8 md:p-16">
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                <span>Kontakt</span>
              </h1>
              <p className="max-w-xl text-xl leading-relaxed text-gray-600 lg:text-2xl">
                Masz pytania, sugestie, a może chcesz{' '}
                <span className="font-semibold text-purple-600">nawiązać współpracę?</span> Napisz
                bezpośrednio na{' '}
                <span className="font-semibold text-purple-600">podany adres e-mail.</span> Postaram
                się odpowiedzieć na każdą wiadomość tak szybko, jak to możliwe.
              </p>
            </div>
            <div className="relative h-full min-h-[400px] w-full sm:min-h-[400px] lg:min-h-full">
              <img
                src="/kontakt/top-img.png"
                alt="Skontaktuj się ze mną"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja szczegóły */}
      <section className="relative mt-8 flex items-center justify-center overflow-hidden">
        <div className="xm:px-6 container px-4 lg:px-8">
          <div className="space-y-8 text-center">
            <h2 className="text-4xl font-bold leading-tight sm:text-3xl lg:text-5xl">
              <span>Skontaktuj się ze mną</span>
            </h2>
            <p className="max-w-full text-xl leading-relaxed text-gray-600 lg:text-2xl">
              Niniejsza <span className="font-semibold text-purple-600">strona internetowa</span>{' '}
              została zaprojektowana i stworzona jako integralna część{' '}
              <span className="font-semibold text-purple-600">pracy licencjackiej.</span> Powstała w
              celu praktycznego zastosowania oraz prezentacji wiedzy i umiejętności zdobytych
              podczas studiów.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch justify-center gap-16 py-20 lg:grid-cols-2">
            {/* Karta 1 */}
            <div className="flex flex-col rounded-2xl border border-gray-300 bg-gray-300 p-8">
              <div className="flex flex-grow flex-col justify-start space-y-6">
                <h3 className="flex items-center text-2xl font-semibold text-black">
                  <svg
                    className="mr-2 h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Tomasz Domagalski
                </h3>
                <p className="flex-grow text-gray-700">
                  Projekt stworzony do celów przeprowadzenia benchmarku jakości SEO na stronach
                  internetowych w React.js, Next.js i Astro.js.
                </p>
                <div className="mt-4 flex flex-col justify-start gap-2.5">
                  <h4 className="flex items-center text-xl text-black">
                    <svg
                      className="mr-2 h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                      <line x1="8" y1="3" x2="8" y2="21"></line>
                    </svg>
                    Nr. Albumu: 208610
                  </h4>
                  <h4 className="flex items-center text-xl text-black">
                    <svg
                      className="mr-2 h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Email: Tomektd6@gmail.com
                  </h4>
                  <h4 className="flex items-center text-xl text-black">
                    <svg
                      className="mr-2 h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Nr. Telefonu: 664-939-711
                  </h4>
                </div>
              </div>
            </div>

            {/* Karta 2 */}
            <div className="flex flex-col rounded-2xl border border-gray-300 bg-gray-300 p-8">
              <div className="flex flex-grow flex-col justify-start space-y-6">
                <h3 className="flex items-center text-2xl font-semibold text-black">
                  <svg
                    className="mr-2 h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                    <line x1="8" y1="3" x2="8" y2="21"></line>
                  </svg>
                  Praca licencjacka
                </h3>
                <p className="flex-grow text-gray-700">Dane pracy licencjackiej</p>
                <div className="mt-4 flex flex-col justify-start gap-2.5">
                  <h4 className="flex items-center text-xl text-black">
                    <svg
                      className="mr-2 h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5v-11A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                    Kierunek: Informatyka stosowana - Inżynieria oprogramowania
                  </h4>
                  <h4 className="flex items-center text-xl text-black">
                    <svg
                      className="mr-2 h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5v-11A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                    Tytuł pracy
                  </h4>
                  <h4 className="flex items-center text-xl text-black">
                    <svg
                      className="mr-2 h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Promotor: dr Bartłomiej Balsamski
                  </h4>
                  <h4 className="flex items-center text-xl text-black">
                    <svg
                      className="mr-2 h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Data obrony: 17.09.2025r.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
