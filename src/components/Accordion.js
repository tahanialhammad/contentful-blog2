// 'use client';

// import { useState } from 'react';
// import { ChevronUpIcon } from '@heroicons/react/20/solid';

// const faqs = [
//   {
//     question: 'Wat is Next.js?',
//     answer: 'Next.js is een React-framework voor server-side rendering en statische sites.',
//   },
//   {
//     question: 'Wat is Tailwind CSS?',
//     answer: 'Tailwind CSS is een utility-first CSS-framework voor het snel bouwen van UI’s.',
//   },
//   {
//     question: 'Wat is Headless UI?',
//     answer: 'Headless UI biedt toegankelijke, ongestylede componenten voor React en Vue.',
//   },
// ];

// export default function Accordion() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (index) => {
//     setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   return (
//     <div className="w-full max-w-xl mx-auto space-y-2 p-4">
//       {faqs.map((faq, index) => {
//         const isOpen = openIndex === index;

//         return (
//           <div key={index}>
//             <button
//               onClick={() => toggle(index)}
//               className="flex justify-between w-full text-left font-bold text-black py-2 focus:outline-none"
//             >
//               <span>{faq.question}</span>
//               <ChevronUpIcon
//                 className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
//                   isOpen ? 'rotate-180' : ''
//                 }`}
//               />
//             </button>

//             {isOpen && (
//               <div className="text-sm text-gray-700 pb-4 transition duration-200">
//                 {faq.answer}
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }



'use client';

import { useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-2 p-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className="flex justify-between w-full text-left font-bold text-black py-2 focus:outline-none"
            >
              <span>{item.question}</span>
              <ChevronUpIcon
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="text-sm text-gray-700 pb-4 transition duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
