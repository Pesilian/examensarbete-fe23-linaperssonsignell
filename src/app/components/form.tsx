'use client'
import { useEffect, useState } from 'react'

//import of components
import DragAndDrop from './dragAndDrop'
import Button from './button'
import { DarkMode } from '@/src/services/themeService'

export default function Form() {
  const [selectNumber, setSelectNumber] = useState<number | null>(2)
  const [selectModel, setSelectModel] = useState<string | null>('small')
  const [selectTranslation, setSelectTranslation] = useState<boolean>(false)
  const isDarkMode = DarkMode()

  //Stores formdata in localstorage to be used in transcribed.tsx
  useEffect(() => {
    const formData = {
      selectNumber,
      selectModel,
      selectTranslation,
    }
    localStorage.setItem('formData', JSON.stringify(formData))
    console.log('Formulärdata sparad:', formData)
  }, [selectNumber, selectModel, selectTranslation])

  return (
    //Form for the transcription settings
    <section
      className={`flex flex-col lg:col-span-2 lg:col-start-3  lg:justify-self-center lg:self-center rounded-sm h-auto w-auto lg:w-96 p-2 ${isDarkMode ? 'bg-stone-950' : ' bg-white'}`}
    >
      <h2 className="font-Roboto text-2xl font-medium">Inställningar</h2>
      <h3 className="font-Roboto text-nowrap text-xs text-stone-700">
        Konfigurera din transkription
      </h3>
      <form className="flex flex-col mb-4">
        {/* Antal talare */}
        <label className="text-xs mt-4 font-medium">Antal talare</label>
        <select
          id="numberSelect"
          value={selectNumber || ''}
          onChange={(e) => setSelectNumber(Number(e.target.value))}
          className="w-full bg-transparent text-stone-700 text-xs border border-stone-200 rounded pl-3 pr-8 py-2 transition duration-300 focus:outline-none focus:border-stone-400 hover:border-stone-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
        >
          <option value="" disabled>
            Välj antal talare
          </option>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        {/* Modell */}
        {/* Ska kunna användas för post-req till process_segments men är inte funktionell i backend för tillfället*/}
        <label className="text-xs mt-4 font-medium">Modell</label>
        <select
          id="modelSelect"
          value={selectModel || ''}
          onChange={(e) => setSelectModel(e.target.value)}
          className="w-full bg-transparent text-stone-700 text-xs border border-stone-200 rounded pl-3 pr-8 py-2 transition duration-300 focus:outline-none focus:border-stone-400 hover:border-stone-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
        >
          <option value="" disabled>
            Välj...
          </option>
          <option value="tiny">Pytteliten</option>
          <option value="base">Grundläggande</option>
          <option value="small">Liten</option>
          <option value="medium">Medelstor</option>
          <option value="large">Stor</option>
        </select>

        {/* Checkbox för översättning */}
        {/* Ska kunna användas för post-req till process_segments men är inte funktionell i backend för tillfället*/}
        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            id="translationSelect"
            checked={selectTranslation}
            onChange={() => setSelectTranslation(!selectTranslation)}
            className="w-4 h-4 border border-stone-300 rounded cursor-pointer"
          />
          <label htmlFor="translationSelect" className="text-xs font-medium">
            Översätt till engelska
          </label>
        </div>
      </form>

      <DragAndDrop />

      {/* Knappar */}
      <div className="flex justify-between mt-4">
        <Button
          label="Tillbaka"
          color={isDarkMode ? 'darkMode' : 'secondary'}
          textColor="stone-50"
          link="/"
        />
        <Button
          label="Transkribera"
          textColor="stone-50"
          color="primary"
          link="/transcribed"
        />
      </div>
    </section>
  )
}
