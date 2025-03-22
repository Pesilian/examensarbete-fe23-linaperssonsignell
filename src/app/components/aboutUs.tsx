import FormLink from './formLink'

//Simple component that displays information about the company and a link to the form
//Is used in page.tsx

export default function AboutUs() {
  return (
    <aside className="flex flex-col justify-center p-10 lg:text-left lg:pl-10 lg:col-span-2 lg:col-start-3  lg:justify-self-center lg:self-center lg:w-5/6">
      <h2 className=" font-black text-center lg:text-left lg:text-nowrap text-5xl mb-4">
        GR Transcripion
      </h2>
      <p className="font-Roboto text-base/7">
        Vår AI-drivna transkriberingstjänst använder den senaste teknologin för
        att omvandla tal till text med hög precision. Tjänsten är designad för
        att hantera olika accenter, bakgrundsljud och talhastigheter, vilket gör
        den perfekt för ett brett spektrum av användningsområden.
      </p>
      <p className="hidden lg:block font-Roboto text-base/7 mt-4">
        Oavsett om du behöver transkribera intervjuer, föreläsningar, möten
        eller podcasts, så kan vår AI ge dig en pålitlig och tidsbesparande
        lösning för att skapa exakta transkriptioner. Upplev enkelheten i att få
        dina ljudfiler omvandlade till text på några minuter!
      </p>
      <FormLink />
    </aside>
  )
}
