export default function Footer() {
  return (
    <footer className="bg-surface-container-highest text-foreground px-6 py-12 border-t border-outline-variant/30 font-sans text-right">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-serif text-lg font-bold mb-4 text-primary">هدايا نوارة</h4>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            نصنع قطعًا فنية فريدة ومميزة تجمع بين الجمال والهدوء، من الشموع العطرية الطبيعية إلى أعمال الريزن الإبداعية، وكل قطعة تُصنع يدويًا بكل حب وشغف.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-4 text-foreground">منتجاتنا</h4>
          <ul className="text-sm text-on-surface-variant space-y-2">
            <li><a href="/services" className="hover:text-primary transition-colors">شموع عطرية طبيعية</a></li>
            <li><a href="/services" className="hover:text-primary transition-colors">أعمال ريزن إبداعية</a></li>
            <li><a href="/services" className="hover:text-primary transition-colors">توزيعات ومناسبة خاصة</a></li>
            <li><a href="/contact" className="hover:text-primary transition-colors">طلبات وتصاميم مخصصة</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-4 text-foreground">تواصل معنا</h4>
          <ul className="text-sm text-on-surface-variant space-y-2">
            <li>البريد الإلكتروني: <a href="mailto:nawara@gamail.com" className="hover:text-primary transition-colors">nawara@gmail.com</a></li>
            <li>الموقع:  العراق , بغداد </li>
            <li>شحن وتوصيل لكافة مدن العراق</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg font-bold mb-4 text-foreground">تابعنا</h4>
          <div className="flex justify-start gap-4">
            <a href="#" aria-label="Facebook" className="text-on-surface-variant hover:text-primary transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5v-2.3C10.5 8.3 11.3 7 13.4 7H16v3h-2c-.7 0-1 .4-1 1V12h3l-.5 3H13v7A10 10 0 0022 12z" />
              </svg>
            </a>

            <a href="https://www.instagram.com/nawara_ali_?igsh=eDZ3OGVkd2l1OWR5" aria-label="Instagram" className="text-on-surface-variant hover:text-primary transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zM12 8a4 4 0 100 8 4 4 0 000-8zm0 2.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4.5-3a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
            </a>

            <a href="#" aria-label="Twitter" className="text-on-surface-variant hover:text-primary transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M22.46 6c-.77.34-1.6.57-2.46.68a4.2 4.2 0 001.85-2.31 8.4 8.4 0 01-2.67 1 4.2 4.2 0 00-7.15 3.84A12 12 0 013 5.2a4.2 4.2 0 001.3 5.6A4.2 4.2 0 012 10v.1a4.2 4.2 0 003.36 4.1 4.2 4.2 0 01-1.9.07 4.2 4.2 0 003.92 2.9A8.4 8.4 0 012 19.54 12 12 0 008.29 21c7.55 0 11.68-6.26 11.68-11.7v-.53A8.4 8.4 0 0022.46 6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-outline-variant/20 pt-6 text-center text-xs text-on-surface-variant">
        © {new Date().getFullYear()} هدايا نوارة. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
