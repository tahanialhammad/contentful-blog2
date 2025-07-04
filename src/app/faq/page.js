// import client from "../../lib/contentful";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// async function getFaqGroupsWithFaqs() {
//   const groupRes = await client.getEntries({
//     content_type: "faqGroup",
//   });

//   const faqRes = await client.getEntries({
//     content_type: "faq",
//   });

//   // Maak een object van alle FAQ’s per ID
//   const faqsById = Object.fromEntries(
//     faqRes.items.map((faq) => [faq.sys.id, faq])
//   );

//   // Gebruik hier exact de API ID van je veld
//   const faqFieldName = "faQs";

//   // Voeg FAQ entries toe aan de juiste groepen
//   return groupRes.items.map((group) => {
//     const linkedFaqs = (group.fields[faqFieldName] || []).map(
//       (ref) => faqsById[ref.sys.id]
//     );

//     return {
//       ...group,
//       fields: {
//         ...group.fields,
//         [faqFieldName]: linkedFaqs.filter(Boolean),
//       },
//     };
//   });
// }

// export default async function FAQPage() {
//   const faqGroups = await getFaqGroupsWithFaqs();

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

export default async function FAQPage() {
  // Haal alle FAQ groepen op (inclusief gelinkte FAQ entries)
  const response = await client.getEntries({
    content_type: "faqGroup",
    include: 2, // Zorgt dat gelinkte faqs automatisch worden meegeleverd
  });

  const faqGroups = response.items;

  return (
    <div className="faq-page" style={{ padding: "2rem" }}>
      <h1>Veelgestelde vragen</h1>

      {faqGroups.map((group) => (
        <div key={group.sys.id} style={{ marginBottom: "2rem" }}>
          <h2>{group.fields.title}</h2>

          {group.fields.faQs?.length > 0 ? (
            <ul>
              {group.fields.faQs.map((faq) => (
                <li key={faq.sys.id} style={{ marginBottom: "1rem" }}>
                  <strong>{faq.fields.question}</strong>
                  <div>{documentToReactComponents(faq.fields.answer)}</div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Geen vragen in deze groep.</p>
          )}
        </div>
      ))}
    </div>
  );
}
