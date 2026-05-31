import HeroSection from "../../components/HeroSection";
import Image from "next/image";
import CallToAction from "../../components/CallToAction";
import PageContent from "../../components/PageContent";

export default function AboutPage() {
  return (
    <div>
      <HeroSection title="مرحباً، أنا تهاني" />
      <PageContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 items-center font-sans text-right">
          {/* Right column: Content */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              مؤسسة هدايا نوارة للشموع والريزن المصنوعة يدويًا
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              بدأ شغفي في صناعة الشموع العطرية وأعمال الريزن كشكل من أشكال التعبير الفني والجمال البصري. في هدايا نوارة، نسعى دائمًا لتقديم قطع فريدة تُصنع يدويًا بكل حب وعناية، لتضفي لمسة من الدفء والهدوء على منازلكم، وتكون هدايا استثنائية تعبر عن مشاعركم الصادقة لمن تحبون.
            </p>
          </div>

          {/* Left column: Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 shadow-ambient rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=687&auto=format&fit=crop"
                alt="صناعة الشموع والريزن هدايا نوارة"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Brand Values Section */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-surface-container-lowest border border-outline-variant/15 rounded-xl shadow-ambient hover:shadow-glow transition-all duration-300 text-right">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                صناعة يدوية دقيقة
              </h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                كل قطعة من منتجاتنا تُصنع يدويًا بالكامل من الصفر، مما يضمن خلوها من التكرار وتميزها بتفاصيل دقيقة وجودة حرفية عالية.
              </p>
            </div>

            <div className="p-6 bg-surface-container-lowest border border-outline-variant/15 rounded-xl shadow-ambient hover:shadow-glow transition-all duration-300 text-right">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                مواد طبيعية وآمنة
              </h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                نلتزم باستخدام شمع الصويا الطبيعي 100% والزيوت العطرية النقية الخالية من البارابين، والريزن الفاخر المقاوم للخدش والاصفرار.
              </p>
            </div>

            <div className="p-6 bg-surface-container-lowest border border-outline-variant/15 rounded-xl shadow-ambient hover:shadow-glow transition-all duration-300 text-right">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                تصاميم وهدايا مخصصة
              </h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                نمنحك القدرة على اختيار الألوان والروائح والأسماء لطلب قطع وتوزيعات تناسب تمامًا ذوقك ومناسباتك الخاصة.
              </p>
            </div>
          </div>
        </section>

        {/* Explain the Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 items-center font-sans text-right">
          {/* Right Column: Image */}
          <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-ambient hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1170&auto=format&fit=crop"
              alt="لماذا هدايا نوارة"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={400}
              height={400}
              className="object-cover"
              priority={false}
            />
          </div>

          {/* Left Column: Text */}
          <div className="p-6 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-foreground">لماذا هدايا نوارة؟</h2>
            <p className="text-on-surface-variant leading-relaxed">
              اسم <strong>نوارة</strong> يعني الضياء والإشراق والزهرة المتفتحة. يعكس هذا الاسم رؤيتنا في نشر الدفء والجمال والضوء من خلال شموعنا العطرة المضيئة وقطع الريزن البراقة التي نصنعها.
              <br /><br />
              نحن نؤمن أن كل هدية تقدمها تحمل معها مشاعر صادقة وتهاني حارة، لذا نسعى لجعلها نوارة تضيء قلوب من تحبون وتترك فيها أثرًا جميلاً يدوم.
            </p>
          </div>
        </div>

        <CallToAction />
      </PageContent>
    </div>
  );
}
