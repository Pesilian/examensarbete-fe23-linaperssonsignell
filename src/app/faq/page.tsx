import FAQ from '../components/getFAQ'

export default function FaQ() {
  return (
    <article className="h-lvh w-full overflow-auto overscroll-contain lg:grid lg:grid-cols-7 mt-20 font-Roboto">
      <h2 className="text-center font-roboto lg:col-span-3 lg:mb-10 lg:col-start-3 justify-self-center font-black text-3xl">
        Vanliga frågor och tips
      </h2>
      <FAQ />
    </article>
  )
}
