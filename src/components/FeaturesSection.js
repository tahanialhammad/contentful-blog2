// Framer Motion werkt alleen op de client
"use client";

import { Code, Server, Search, Palette } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      title: "Website bouwen",
      desc: "WordPress website of webshop op maat",
      icon: <Code className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Software Ontwikkeling",
      desc: "Laravel-apps met moderne technologieën",
      icon: <Server className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Vindbaar op Google (SEO)",
      desc: "Zichtbaar in Google & Bing",
      icon: <Search className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Merkidentiteit",
      desc: "Logo’s, pictogrammen & meer",
      icon: <Palette className="w-10 h-10 text-indigo-600" />,
    },
  ];

  // Animatie variant
  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Linker kolom: titel + intro */}
        <div className="m-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Onze diensten
          </h2>
          <p className="text-gray-600">
            Wij creëren de beste digitale producten. Mijn creaties zijn meer dan
            alleen techniek – het is digitale kunst met een doel. Elk ontwerp is
            met zorg gemaakt om niet alleen te werken, maar ook te inspireren.
          </p>
        </div>

        {/* Rechter kolom: features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            // <div
            //   key={index}
            //   className="flex flex-col items-start text-left bg-white rounded-2xl p-6"
            // >
            //   <div className="mb-3">{feature.icon}</div>
            //   <h3 className="text-lg font-semibold text-indigo-600">
            //     {feature.title}
            //   </h3>
            //   <p className="text-gray-600">{feature.desc}</p>
            // </div>

            <motion.div
              key={index}
              className="flex flex-col items-start text-left bg-white rounded-2xl p-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-indigo-600">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
