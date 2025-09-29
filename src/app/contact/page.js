import HeroSection from "../../components/HeroSection";
import { MapPin, Mail, Smartphone } from "lucide-react";
import ContactForm from "../../components/ContactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div>
      <HeroSection title="Laten we het hebben over Jouw geweldige project" />

      <section className="max-w-6xl mx-auto px-6 py-12 bg-fuchsia-400/20 rounded-xl backdrop-blur-sm my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 flex flex-col items-center text-center">
            <MapPin size={32} className="text-fuchsia-600" />
            <h3 className="text-xl font-semibold mb-2">Werkgebied</h3>
            <p className="text-gray-600">
              Nederland <br />
              Groningen en omgeving
            </p>
          </div>

          <div className="p-6 flex flex-col items-center text-center">
            <Mail size={32} className="text-fuchsia-600" />
            <h3 className="text-xl font-semibold mb-2">E-mailadres</h3>
            <a href="mailto:info@tahanina.nl" className="text-gray-600">
              info@tahanina.nl
            </a>
          </div>

          <div className="p-6 flex flex-col items-center text-center">
            <Smartphone size={32} className="text-fuchsia-600" />
            <h3 className="text-xl font-semibold mb-2">Telefoonnummers</h3>
            <p className="text-gray-600">
              <a href="tel:+31621942804" className="hover:underline">
                06 219 428 04
              </a>
              <br />
              Maandag t/m vrijdag van 12.00 - 17.00 uur
            </p>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-12">
        {/* Linker kolom */}
        <div className="relative w-full h-80">
          <Image
            src="/background2.webp"
            alt="Over Tahanina"
            fill
            className="object-cover rounded-xl shadow-2xl"
            priority={false}
          />
        </div>{" "}
        {/* Rechter kolom */}
        <div className="">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
