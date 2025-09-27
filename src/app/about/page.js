import HeroSection from "../../components/HeroSection";
import Image from "next/image";

export default function Aboutage() {
  return (
    <div>
      <HeroSection title="Hi, ik ben Tahani">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Linker kolom */}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">
                Freelance webontwikkelaar en oprichter van Tahanina
              </h2>
              <p>
                Ik bouw websites en webapplicaties die niet alleen werken, maar
                ook spreken. Vanuit Groningen help ik ondernemers met alles van
                WordPress tot maatwerk Laravel software.
              </p>
            </div>

            {/* Rechter kolom */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
              />
            </div>
          </div>
        </div>
      </HeroSection>
    </div>
  );
}
