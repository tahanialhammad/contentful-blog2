export default function TopProjects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8 font-sans text-right">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h4 className="uppercase text-primary font-bold tracking-wider text-xs mb-2">أبرز أعمالنا</h4>
        <h2 className="font-serif text-3xl font-extrabold text-foreground mb-4">
          إبداع وتفرّد في كل تفصيل
        </h2>
        <p className="text-on-surface-variant leading-relaxed">
          اكتشف تشكيلة مختارة من أعمالنا الفنية المميزة بالريزن والشموع الطبيعية، حيث تعبر كل قطعة عن الشغف والتصميم المبتكر المصنوع يدويًا بالكامل.
        </p>
      </div>

      {/* Grid 2/3 - 1/3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large project (2/3 width) */}
        <div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant/15 rounded-xl p-8 flex flex-col justify-between shadow-ambient hover:shadow-glow transition-all duration-300 min-h-[250px]">
          <div>
            <span className="text-xs text-primary font-bold tracking-wide uppercase">تصميم ريزن</span>
            <h3 className="font-serif text-2xl font-bold text-foreground mt-2 mb-3">
              صينية ريزن بنقوش ذهبية وأحجار كريمة
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              قطعة ديكور فريدة مصنوعة من الريزن الشفاف المقاوم للحرارة، مدموجة بقطع من الحجارة الطبيعية وخطوط ورق الذهب الفاخرة لتضفي لمسة ملكية على ضيافتك.
            </p>
          </div>
          <div className="mt-6">
            <a href="/portfolio" className="text-sm font-bold text-primary hover:text-primary-container transition-colors">
              عرض تفاصيل العمل &larr;
            </a>
          </div>
        </div>

        {/* Small project (1/3 width) */}
        <div className="bg-surface-container-lowest border border-outline-variant/15 rounded-xl p-8 flex flex-col justify-between shadow-ambient hover:shadow-glow transition-all duration-300 min-h-[250px]">
          <div>
            <span className="text-xs text-primary font-bold tracking-wide uppercase">شموع عطرية</span>
            <h3 className="font-serif text-2xl font-bold text-foreground mt-2 mb-3">
              مجموعة شموع اللافندر والبابونج
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              شموع مصنوعة من شمع الصويا الطبيعي 100% مع فتيل خشبي يصدر صوت طقطقة هادئ كالحطب، معززة بزيوت عطرية تساعد على الاسترخاء.
            </p>
          </div>
          <div className="mt-6">
            <a href="/portfolio" className="text-sm font-bold text-primary hover:text-primary-container transition-colors">
              عرض تفاصيل العمل &larr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
