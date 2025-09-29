// import client from "../../lib/contentful";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// export default async function FAQPage() {
//   // Haal alle FAQ groepen op (inclusief gelinkte FAQ entries)
//   const response = await client.getEntries({
//     content_type: "faqGroup",
//     include: 2, // Zorgt dat gelinkte faqs automatisch worden meegeleverd
//   });

//   const faqGroups = response.items;

//   return (
//     <div className="faq-page" style={{ padding: "2rem" }}>
//       <h1>Veelgestelde vragen</h1>

//       {faqGroups.map((group) => (
//         <div key={group.sys.id} style={{ marginBottom: "2rem" }}>
//           <h2>{group.fields.title}</h2>

//           {group.fields.faQs?.length > 0 ? (
//             <ul>
//               {group.fields.faQs.map((faq) => (
//                 <li key={faq.sys.id} style={{ marginBottom: "1rem" }}>
//                   <strong>{faq.fields.question}</strong>
//                   <div>{documentToReactComponents(faq.fields.answer)}</div>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>Geen vragen in deze groep.</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

import client from "../../lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Accordion from "../../components/Accordion";
import PageContent from "../../components/PageContent";
import HeroSection from "../../components/HeroSection";

export default async function FAQPage() {
  const response = await client.getEntries({
    content_type: "faqGroup",
    include: 2,
  });

  const faqGroups = response.items;

  return (
    <div>
      <HeroSection title="Veelgestelde vragen" />
      <PageContent>
        {faqGroups.map((group) => {
          // Zet elk FAQ item om naar juiste formaat voor Accordion
          const faqItems = group.fields.faQs?.map((faq) => ({
            question: faq.fields.question,
            answer: documentToReactComponents(faq.fields.answer),
          }));

          return (
            <div
              key={group.sys.id}
              className="mb-12 flex flex-col md:flex-row gap-6 border-b-2 border-fuchsia-600"
            >
              {/* Linker kolom: titel */}
              <div className="md:w-1/4 flex items-start">
                <h2 className="text-xl font-semibold">{group.fields.title}</h2>
              </div>

              {/* Rechter kolom: Accordion */}
              <div className="md:w-3/4">
                {faqItems?.length > 0 ? (
                  <Accordion items={faqItems} />
                ) : (
                  <p>Geen vragen in deze groep.</p>
                )}
              </div>
            </div>
          );
        })}
      </PageContent>
    </div>
  );
}
