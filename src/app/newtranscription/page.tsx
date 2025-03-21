import Form from '../components/form'
import Hero from '../components/Hero'

export default function TranscriptionForm() {
  return (
    <article className="h-full w-full grid grid-cols-3">
      <Hero />
      <Form />
    </article>
  )
}
