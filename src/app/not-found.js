import Link from "next/link";

export default function NotFound() {
  return (
     <main className="grid min-h-full place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8 font-sans">
        <div className="text-center">
          <p className="font-serif text-base font-bold text-primary text-5xl">404</p>
          <h1 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-balance text-foreground sm:text-5xl">
            الصفحة غير موجودة
          </h1>
          <p className="mt-6 text-base text-on-surface-variant leading-relaxed">
            عذرًا، لم نتمكن من العثور على الصفحة التي تبحث عنها.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-primary text-white border border-transparent font-bold py-3 px-6 rounded-full shadow-ambient hover:shadow-glow hover:scale-[1.02] transition-all duration-200"
            >
              العودة للرئيسية
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors"
            >
              اتصل بنا <span aria-hidden="true">&larr;</span>
            </Link>
          </div>
        </div>
      </main>
  );
}
