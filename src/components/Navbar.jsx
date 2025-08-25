import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-bold">
          TomDom
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/uslugi" className="hover:text-gray-300">
              Usługi
            </Link>
          </li>
          <li>
            <Link to="/kontakt" className="hover:text-gray-300">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
