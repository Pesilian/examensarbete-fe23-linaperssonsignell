'use client'

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
    fetch('https://g2t7rlsua6.execute-api.eu-north-1.amazonaws.com')
      .then((res) => res.json())
      .then((data) => {
        setGroupedFaqs(data)
      })
      .catch((error) => console.error('Fel vid hämtning av FAQ:', error))
  }, [])

  return (
    <section className="w-full h-auto pt-20 pb-20 col-span-7 col-start-1 flex justify-center flex flex-col ">
      {Object.entries(groupedFaqs).map(([header, faqs]) => (
        <div
          key={header}
          className="mb-8 flex flex-col justify-evenly text-center content-center w-full"
        >
          <h2 className="text-xl font-semibold mb-4">{header}</h2>
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
