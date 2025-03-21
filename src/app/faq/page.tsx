import AccordionFaq from '../components/accordion'

export default function FaQ() {
  return (
    <section className="flex flex-col self-center justify-items-center items-center h-full w-full">
      <AccordionFaq
        title="Hur gör jag för att göra saker?"
        content="Pariatur consectetur officia ex aliquip excepteur ad nostrud pariatur quis cillum aliqua. Excepteur quis aliquip dolore nostrud et incididunt adipisicing aliquip nulla sit. Sunt voluptate dolor irure et nisi velit enim id nulla dolor ad pariatur occaecat. Cillum occaecat irure culpa elit qui exercitation esse excepteur dolor ut. Do laborum fugiat incididunt elit sint nulla."
      />
      <AccordionFaq
        title="Men hur gör jag då om jag inte vill göra grejer?"
        content="Excepteur eu ad eu et id ex pariatur nostrud esse officia esse. Sunt cillum eiusmod non dolore laborum velit pariatur non sunt exercitation do enim. Consectetur cupidatat qui veniam nisi eiusmod elit anim."
      />

      <AccordionFaq
        title="Hur hanteras katter på GR?"
        content="Eiusmod proident cupidatat officia ex nostrud aute cillum. Culpa nostrud anim consequat et ut dolor qui non quis in officia ex irure. Anim aliqua Lorem ad do irure laboris incididunt aliquip minim. Qui anim dolore est pariatur magna aliqua commodo officia exercitation tempor labore sit sint. Id enim laborum ea ullamco mollit ullamco adipisicing ad."
      />

      <AccordionFaq
        title="Och hundar då?"
        content="Nostrud laborum sint quis reprehenderit voluptate in et enim laborum consectetur Lorem officia. Deserunt quis incididunt et laborum pariatur occaecat exercitation incididunt deserunt id tempor ea. Aute ipsum consectetur tempor aute irure sunt non consectetur mollit irure aute consectetur elit esse."
      />
    </section>
  )
}
