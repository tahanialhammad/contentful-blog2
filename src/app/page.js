import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TopProjects from "../components/TopProjects";
import CallToAction from "../components/CallToAction";
import AppButton from "../components/AppButton";
import CandleSection from "../components/CandleSection";
import ResinSection from "../components/ResinSection";
import RosePetalsBackground from "../components/RosePetalsBackground";


export default function Home() {
  return (
    <div className="space-y-16 py-8">
      <RosePetalsBackground />
      <HeroSection title="لمسة فنية من الشموع والريزن المصنوعة يدويًا">
        <p className="mt-6 text-lg leading-8 text-on-surface-variant font-sans max-w-2xl mx-auto">
          في هدايا نوارة نصنع قطعًا فنية فريدة تجمع بين الجمال والهدوء، من الشموع العطرية إلى أعمال الريزن المميزة، وكل قطعة تُصنع يدويًا بحب واهتمام بالتفاصيل.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <AppButton href="/contact" variant="fill">
            اطلب تصميمًا مخصصًا
          </AppButton>

          <AppButton href="/services" variant="outline">
            تصفّح المنتجات <span aria-hidden="true">&larr;</span>
          </AppButton>
        </div>
      </HeroSection>

      <div className="max-w-7xl mx-auto space-y-24 px-4 sm:px-6 lg:px-8">
        <FeaturesSection />

        <CandleSection />

        <ResinSection />

        <TopProjects />

        <CallToAction />
      </div>
    </div>
  );
}
