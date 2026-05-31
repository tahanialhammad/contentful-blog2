import client from "../../lib/contentful";
import Link from "next/link";
import HeroSection from "../../components/HeroSection";
import PageContent from "../../components/PageContent";

export default async function CategoriesPage() {
  const categoriesRes = await client.getEntries({
    content_type: "category",
    order: "fields.name",
  });

  const servicesRes = await client.getEntries({
    content_type: "service",
    include: 1,
  });

  const portfolioRes = await client.getEntries({
    content_type: "portfolio",
    include: 1,
  });

  const categories = categoriesRes.items;
  const services = servicesRes.items;
  const projects = portfolioRes.items;

  // Predefined styling and descriptive text for each category
  const categoryStyles = {
    candles: {
      gradient: "from-amber-500/10 to-orange-500/15 border-amber-500/20 hover:border-amber-500/40",
      iconColor: "text-amber-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ),
      description: "شموع عطرية مصنوعة يدويًا من شمع الصويا الطبيعي 100% لتضفي دفءاً وهدوءاً على منزلك."
    },
    rezin: {
      gradient: "from-purple-500/10 to-indigo-500/15 border-purple-500/20 hover:border-purple-500/40",
      iconColor: "text-purple-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: "قطع ديكور وإكسسوارات صُممت وشُكّلت يدوياً بدقة فائقة باستخدام الريزن الفاخر لتناسب ذوقك الرفيع."
    },
    default: {
      gradient: "from-rose-500/10 to-pink-500/15 border-rose-500/20 hover:border-rose-500/40",
      iconColor: "text-rose-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      description: "مجموعات وتصاميم مخصصة مصنوعة بكل حب وعناية فائقة لتناسب كافة مناسباتكم وهداياكم."
    }
  };

  return (
    <div>
      <HeroSection title="أقسام المنتجات والأعمال" />
      <PageContent>
        <div className="max-w-5xl mx-auto px-6 py-6" style={{ direction: "rtl" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            {categories.map((cat) => {
              const slug = cat.fields.slug;
              const style = categoryStyles[slug] || categoryStyles.default;
              
              const catServicesCount = services.filter(
                (s) => s.fields.category?.sys?.id === cat.sys.id
              ).length;
              
              const catProjectsCount = projects.filter(
                (p) => p.fields.category?.sys?.id === cat.sys.id
              ).length;

              return (
                <Link
                  key={cat.sys.id}
                  href={`/categories/${slug}`}
                  className={`group relative p-8 rounded-2xl bg-gradient-to-br ${style.gradient} border backdrop-blur-sm shadow-ambient hover:shadow-glow hover:scale-[1.015] transition-all duration-300 flex flex-col justify-between min-h-[220px]`}
                >
                  <div>
                    {/* Top Row: Icon & Counts */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/10 shadow-sm ${style.iconColor}`}>
                        {style.icon}
                      </div>
                      
                      <div className="flex gap-3 text-xs font-semibold text-on-surface-variant bg-surface-container-lowest/60 border border-outline-variant/10 px-3 py-1.5 rounded-full">
                        <span>{catServicesCount} منتج</span>
                        <span className="text-outline-variant/50">|</span>
                        <span>{catProjectsCount} مشروع</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {cat.fields.name}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {style.description}
                    </p>
                  </div>

                  {/* Bottom link */}
                  <div className="mt-8 flex items-center gap-1.5 text-sm font-bold text-primary">
                    <span>استكشف القسم بالكامل</span>
                    <span className="transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </PageContent>
    </div>
  );
}
