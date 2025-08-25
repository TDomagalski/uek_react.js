import { Link } from 'react-router-dom';

export default function Footer({
  companyName = 'TomDom',
  companyDescription = 'Tworzę nowoczesne strony internetowe, zajmuję się skutecznym SEO i content marketingiem. Pomagam firmom budować widoczność i przyciągać klientów online.',
  address = 'Tomasz Domagalski, 208610',
  phone = '(+48) 664-939-711',
}) {
  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Uslugi', href: '/uslugi' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  const serviceLinks = [
    { name: 'Projektowanie stron www', href: '/uslugi' },
    { name: 'Pozycjonowanie SEO', href: '/uslugi' },
    { name: 'Content Marketing', href: '/uslugi' },
  ];

  const socialLinks = [
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative flex items-center justify-center overflow-hidden border-t border-gray-200 bg-gray-50">
      <div className="container px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-4 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-1 space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center space-x-3 md:justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-orange-600">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <div className="h-3 w-3 rounded-full bg-teal-500"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{companyName}</h3>
            </div>

            <p className="text-center text-sm leading-relaxed text-gray-600 sm:text-base md:text-left">
              {companyDescription}
            </p>

            <div className="flex justify-center space-x-3 sm:justify-start sm:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white sm:h-10 sm:w-10"
                  aria-label={`Odwiedź nasz profil na ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation & Services */}
          <div className="col-span-2 flex flex-row justify-around">
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-lg font-semibold text-gray-900">Nawigacja</h4>
              <nav className="flex flex-col space-y-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-sm text-gray-600 transition-colors duration-200 hover:text-orange-600 sm:text-base"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-lg font-semibold text-gray-900">Usługi</h4>
              <nav className="flex flex-col space-y-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="text-sm text-gray-600 transition-colors duration-200 hover:text-orange-600 sm:text-base"
                  >
                    {service.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-1 space-y-4 text-center sm:space-y-6 sm:text-left">
            <h4 className="text-lg font-semibold text-gray-900">Kontakt</h4>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">{address}</p>
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="font-semibold text-orange-600 hover:text-orange-700"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 flex flex-col items-center justify-between border-t pt-6 text-sm text-gray-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {companyName}. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-6 sm:space-y-0">
            <a href="#" className="hover:text-gray-900">
              Informatyka stosowana - Inżynieria oprogramowania
            </a>
            <a href="#" className="hover:text-gray-900">
              Uniwersytet Ekonomiczny w Krakowie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
