import FAQ from '../components/getFAQ'

export default function FaQ() {
  return (
    <article className="h-lvh w-full overflow-auto overscroll-contain grid grid-cols-7 mt-20 font-Roboto">
      <h2 className=" mb-10 font-roboto col-span-3 col-start-3 justify-self-center font-black text-3xl">
        Vanliga frågor och tips
      </h2>
      <FAQ />
    </article>
  )
}
