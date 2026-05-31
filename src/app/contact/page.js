import HeroSection from "../../components/HeroSection";
import { MapPin, Mail, Clock } from "lucide-react";
import ContactForm from "../../components/ContactForm";
import Image from "next/image";
import PageContent from "../../components/PageContent";

export default function ContactPage() {
  return (
    <div>
      <HeroSection title="يسعدنا تواصلك معنا لتصميم هديتك الفريدة" />
      <PageContent>
        <section className="max-w-6xl mx-auto px-6 py-12 bg-surface-container-lowest/80 border border-outline-variant/15 rounded-xl backdrop-blur-md my-8 shadow-ambient font-sans text-right">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <MapPin size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">موقعنا</h3>
              <p className="text-on-surface-variant leading-relaxed">
                المملكة العربية السعودية <br />
                شحن وتوصيل لجميع المناطق
              </p>
            </div>

            <div className="p-6 flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Mail size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">البريد الإلكتروني</h3>
              <a href="mailto:info@hadayanawara.com" className="text-primary hover:text-primary-container font-semibold transition-colors">
                info@hadayanawara.com
              </a>
            </div>

            <div className="p-6 flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Clock size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">أوقات العمل</h3>
              <p className="text-on-surface-variant leading-relaxed">
                متاحون للرد على استفساراتكم وتلقي الطلبات <br />
                طوال أيام الأسبوع من الساعة 9:00 صباحًا حتى 9:00 مساءً
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 items-center">
          {/* Right Column: Info Image */}
          <div className="relative w-full h-[450px] shadow-ambient rounded-xl overflow-hidden hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=687&auto=format&fit=crop"
              alt="صناعة الشموع والريزن اليدوية"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={400}
              height={400} className="object-cover"
              priority={false}
            />
          </div>
          {/* Left Column: Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </PageContent>
    </div>
  );
}
