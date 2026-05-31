// components/CallToAction.js
import { Sparkles, Check } from "lucide-react";
import AppButton from "../components/AppButton";

export default function CallToAction() {
  const points = [
    "تصاميم مخصصة من الشموع العطرية والريزن تناسب ذوقك",
    "مواد طبيعية صديقة للبيئة ومصنوعة يدويًا بالكامل",
    "قطع فنية فريدة ومميزة لتزيين منزلك أو لتقديمها كهدية",
    "تغليف راقٍ ومناسب للهدايا مع خدمة التوصيل السريع",
  ];

  return (
    <section className="bg-primary text-white rounded-xl py-12 my-8 shadow-ambient">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        {/* Right column (RTL layout) */}
        <div>
          <h2 className="font-serif text-3xl font-extrabold mb-4 leading-tight">
            هل تبحث عن هدية فريدة أو قطعة فنية مخصصة؟
          </h2>
          <p className="mb-6 text-primary-fixed/90 leading-relaxed font-sans">
            نحن هنا لنساعدك في تحويل أفكارك إلى قطع فنية حقيقية من الشموع والريزن. إليك ما يميزنا:
          </p>

          <ul className="space-y-3 font-sans">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check size={20} className="text-primary-container mt-1 shrink-0" />
                <span className="text-primary-container/90">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Left column */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <Sparkles size={60} className="text-primary-container animate-pulse" />

          <AppButton
            href="/contact"
            variant="light"
          >
            اطلب تصميمك الخاص الآن
          </AppButton>
        </div>
      </div>
    </section>
  );
}
