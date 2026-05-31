// Framer Motion works on the client
"use client";

import { Heart, Flame, Layers, Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      title: "صناعة يدوية بكل حب",
      desc: "كل قطعة تُصنع يدويًا بعناية فائقة واهتمام بالتفاصيل لتكون فريدة وخاصة بك.",
      icon: <Heart className="w-10 h-10 text-primary" />,
    },
    {
      title: "روائح عطرية طبيعية",
      desc: "نستخدم زيوتًا عطرية ممتازة وشمع الصويا الطبيعي لخلق أجواء دافئة ومريحة وصحية.",
      icon: <Flame className="w-10 h-10 text-primary" />,
    },
    {
      title: "فن الريزن عالي الجودة",
      desc: "نستخدم أفضل أنواع الريزن المقاوم للخدش والاصفرار لضمان بقاء جمال ولمعان قطعك الفنية.",
      icon: <Layers className="w-10 h-10 text-primary" />,
    },
    {
      title: "هدايا وتوزيعات مخصصة",
      desc: "نصمم توزيعات وهدايا مخصصة لمناسباتكم السعيدة لتترك أثرًا جميلاً في قلوب ضيوفكم.",
      icon: <Gift className="w-10 h-10 text-primary" />,
    },
  ];

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Right column: Title & Intro (RTL format) */}
        <div className="space-y-6">
          <h2 className="font-serif text-4xl font-extrabold text-foreground mb-4 leading-tight">
            فن الشموع والريزن اليدوي
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed">
            في هدايا نوارة، الشموع والريزن ليست مجرد منتجات، بل هي قطع فنية نصنعها لتضفي بهجة وأناقة على مساحتك الخاصة. نعتمد على الدقة والمهارة اليدوية لتقديم تصاميم متميزة ترضي ذوقك الرفيع.
          </p>
          <ul className="space-y-3 font-sans text-on-surface-variant">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
              <span>زيوت عطرية علاجية تساعد على الاسترخاء والهدوء</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
              <span>قوالب ريزن مخصصة بالألوان والتصميم الذي تطلبه</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
              <span>مثالية كهدية مميزة في حفلات التخرج، الزفاف، أو المواليد</span>
            </li>
          </ul>
        </div>

        {/* Left column: Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start bg-surface-container-lowest border border-outline-variant/15 rounded-xl p-6 shadow-ambient hover:shadow-glow transition-all duration-300"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-4 bg-primary/10 p-3 rounded-xl inline-flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
