import Form from '../components/form'
import Hero from '../components/Hero'

export default function TranscriptionForm() {
  return (
    <article className="h-full w-full flex flex-col justify-items-center lg:grid lg:grid-cols-4 lg:content-center lg:justify-center">
      <Hero />
      <Form />
    </article>
  )
}
