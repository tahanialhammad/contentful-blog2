export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-3">Over ons</h4>
          <p className="text-sm text-gray-400">
            Wij maken professionele websites met liefde voor design en techniek.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Diensten</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Webdesign</li>
            <li>Development</li>
            <li>SEO</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Email: info@example.com</li>
            <li>Tel: +31 6 12345678</li>
            <li>Adres: Groningen</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Volg ons</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5v-2.3C10.5 8.3 11.3 7 13.4 7H16v3h-2c-.7 0-1 .4-1 1V12h3l-.5 3H13v7A10 10 0 0022 12z" />
              </svg>
            </a>

            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zM12 8a4 4 0 100 8 4 4 0 000-8zm0 2.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4.5-3a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
            </a>

            <a href="#" aria-label="Twitter" className="hover:text-sky-500">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M22.46 6c-.77.34-1.6.57-2.46.68a4.2 4.2 0 001.85-2.31 8.4 8.4 0 01-2.67 1 4.2 4.2 0 00-7.15 3.84A12 12 0 013 5.2a4.2 4.2 0 001.3 5.6A4.2 4.2 0 012 10v.1a4.2 4.2 0 003.36 4.1 4.2 4.2 0 01-1.9.07 4.2 4.2 0 003.92 2.9A8.4 8.4 0 012 19.54 12 12 0 008.29 21c7.55 0 11.68-6.26 11.68-11.7v-.53A8.4 8.4 0 0022.46 6z" />
              </svg>
            </a>

            <a href="#" aria-label="YouTube" className="hover:text-red-600">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M21.8 8s-.2-1.4-.8-2a3 3 0 00-2-1.1C17.2 4.6 12 4.6 12 4.6s-5.2 0-7 .3a3 3 0 00-2 1.1c-.6.6-.8 2-.8 2S2 9.6 2 11.3v1.4c0 1.7.2 3.3.2 3.3s.2 1.4.8 2a3 3 0 002 1.1c1.8.3 7 .3 7 .3s5.2 0 7-.3a3 3 0 002-1.1c.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.4C22 9.6 21.8 8 21.8 8zm-10 6.4V9.6l4.6 2.4-4.6 2.4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Tahanina. Alle rechten voorbehouden.
      </div>
    </footer>
  )
}
