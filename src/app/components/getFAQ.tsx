'use client'

// Standard version – fetches FAQ via the Next.js API route (/api/faq).
// FAQ data is retrieved from DynamoDB using server-side code in src/app/api/faq/route.ts
//Is used on page:faq

import { useEffect, useState } from 'react'
import AccordionFaq from './accordion'

interface Facts {
  id: number
  header: string
  question: string
  answer: string
}

type GroupedFaqs = {
  [header: string]: Facts[]
}

export default function FAQ() {
  const [groupedFaqs, setGroupedFaqs] = useState<GroupedFaqs>({})
  useEffect(() => {
    fetch('/api/faq')
      .then((res) => res.json())
      .then((data) => {
        console.log('RAW response:')
        console.log('FAQ-data:', data)
        setGroupedFaqs(data)
      })
      .catch((err) => console.error('Fel vid hämtning av FAQ:', err))
  }, [])

  return (
    <section className="w-full h-auto pt-20 pb-20 col-span-7 col-start-1 flex justify-center flex flex-col ">
      {Object.entries(groupedFaqs).map(([header, faqs]) => (
        <div
          key={header}
          className="mb-8 flex flex-col justify-evenly text-center content-center w-full"
        >
          <h2 className="text-xl font-semibold text-[#8E0826] mb-4">
            {header}
          </h2>
          {faqs.map((faq) => (
            <AccordionFaq
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      ))}
    </section>
  )
}

// Alternative fetch version used to retrieve FAQ directly from an AWS Lambda function via API Gateway.
// Used instead of Next.js API routes
//
// Activate this fetch by uncommenting and comment away the standard version

// 'use client'

// import { useEffect, useState } from 'react'
// import AccordionFaq from './accordion'

// interface Facts {
//   id: number
//   header: string
//   question: string
//   answer: string
// }

// type GroupedFaqs = {
//   [header: string]: Facts[]
// }

// export default function FAQ() {
//   const [groupedFaqs, setGroupedFaqs] = useState<GroupedFaqs>({})
//   useEffect(() => {
//     fetch('https://g2t7rlsua6.execute-api.eu-north-1.amazonaws.com')
//       .then((res) => res.json())
//       .then((data) => {
//         setGroupedFaqs(data)
//       })
//       .catch((error) => console.error('Fel vid hämtning av FAQ:', error))
//   }, [])

//   return (
//     <section className="w-full h-auto pt-20 pb-20 col-span-7 col-start-1 flex justify-center flex flex-col ">
//       {Object.entries(groupedFaqs).map(([header, faqs]) => (
//         <div
//           key={header}
//           className="mb-8 flex flex-col justify-evenly text-center content-center w-full"
//         >
//           <h2 className="text-xl font-semibold mb-4">{header}</h2>
//           {faqs.map((faq) => (
//             <AccordionFaq
//               key={faq.id}
//               question={faq.question}
//               answer={faq.answer}
//             />
//           ))}
//         </div>
//       ))}
//     </section>
//   )
// }
