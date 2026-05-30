import Image from "next/image";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TopProjects from "../components/TopProjects";
import AppButton from "../components/AppButton";

export default function Home() {
  return (
    <>
      <HeroSection title="لمسة فنية من الشموع والريزن المصنوعة يدويًا">
        <p className="mt-6 text-lg leading-8 text-gray-600">
في هدايا نوارة نصنع قطعًا فنية فريدة تجمع بين الجمال والهدوء، من الشموع العطرية إلى أعمال الريزن المميزة، وكل قطعة تُصنع يدويًا بحب واهتمام بالتفاصيل.
       </p>

       
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <AppButton
            href="/contact"
            variant="fill"
          >
           اطلب تصميم مخصص
          </AppButton>

          <AppButton href="/service" variant="outline">
           تصفّح المنتجات<span aria-hidden="true">→</span>
          </AppButton>
        </div>
      </HeroSection>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <FeaturesSection />

          <TopProjects />
        </main>
      </div>
    </>
  );
}
