
import Image from "next/image";

export default function CandleSection() {

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 items-center font-sans text-right">
      {/* Right column: Content */}
      <div className="space-y-4 bg-primary/10 p-8 shadow-xl rounded-xl">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          فن الشموع
        </h2>
        <p className="text-on-surface-variant leading-relaxed">
          بدأت رحلتنا بشعلة واحدة. كل شمعة تُسكب يدوياً باستخدام مزيج مخصص من شمع جوز الهند وفول الصويا المستدام. نحن لا نصنع الروائح فحسب، بل نصيغ روايات عطرية تستحضر ضباب الصباح والحدائق السرية.        </p>
      </div>

      {/* Left column: Image */}
      <div className="flex justify-center items-center">
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 shadow-ambient rounded-xl overflow-hidden border-4 border-primary/20 shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1603905179139-db12ab535ca9?q=80&w=437&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="صناعة الشموع هدايا نوارة"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={400}
            height={400}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
