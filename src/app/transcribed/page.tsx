'use client'

import { useEffect, useState } from 'react'
import Segment from '../components/segment'
import ProgressBar from '../components/progressbar'
import TranscriptionHeader from '../components/transcriptionHeader'
import TranscriptionIcons from '../components/transcriptionIcons'
import CopyBtn from '../components/copyBtn'

// This component is the main page for the transcription page

interface Segment {
  file: string
  speaker: string
  start: number
  end: number
  text: string
}

export default function FinishedTranscription() {
  const [progress, setProgress] = useState(0)
  const [transcription, setTranscription] = useState('')
  const [segments, setSegments] = useState<Segment[]>([])
  const [transcriptionMode, setTranscriptionMode] = useState(true)
  const [formData, setFormData] = useState<{
    selectNumber: number | null
    selectModel: string | null
    selectTranslation: boolean
  } | null>(null)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  //Formats the timestamp to minutes and seconds

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }

  //Fetches the stored form data from local storage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedFormData = localStorage.getItem('formData')
      if (storedFormData) {
        try {
          const parsedData = JSON.parse(storedFormData)
          setFormData(parsedData)
          console.log('Formulärdata hämtad:', parsedData)
        } catch (error) {
          console.error('Fel vid JSON-parse av formData:', error)
        }
      } else {
        console.warn('Ingen formulärdata hittades i localStorage.')
      }
    }
  }, [])

  //Starts transcription when form data is available
  useEffect(() => {
    if (formData !== null) {
      startTranscription()
    }
  }, [formData])

  //Starts the segmentation process, uses fetch to send a POST request to the server
  const startSegments = async () => {
    if (!formData) {
      console.error('Ingen formulärdata tillgänglig för startSegments.')
      return
    }

    //Uses stored formData to set url
    const response = await fetch(
      `${apiUrl}/process-segments?num_speakers=${formData?.selectNumber}`,
      {
        method: 'POST',
      }
    )

    if (!response.body) {
      console.error('Ingen stream från servern.')
      return
    }
    //Reads the stream from the server and updates the progress bar

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let fullResponse = ''

    const processStream = async () => {
      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        //Decodes the stream and updates the progress bar

        const chunk = decoder.decode(value, { stream: true })
        fullResponse += chunk

        const lines = fullResponse.split('\n')
        fullResponse = lines.pop() ?? ''

        for (const line of lines) {
          if (line.startsWith('data:')) {
            try {
              const json = JSON.parse(line.slice(5).trim())
              console.log('Streamad data:', json)

              //Decodes the stream and updates the progress bar

              if (json.progress !== undefined) {
                setProgress(json.progress)
              }

              //When completed, diarization results are used in segments
              if (json.status === 'complete') {
                console.log('Segmentering komplett:', json.diarization_results)
                setSegments(json.diarization_results)
                setTranscriptionMode(true)
                return
              }
            } catch (error) {
              console.error('Fel vid JSON-parse:', error)
            }
          }
        }
      }
    }

    await processStream()
  }

  //Starts the transcription process, uses fetch to send a POST request to the server
  const startTranscription = async () => {
    try {
      const response = await fetch(`${apiUrl}/transcribe`, {
        method: 'POST',
      })

      if (!response.ok) {
        throw new Error(`Serverfel: ${response.statusText}`)
      }

      if (!response.body) {
        console.error('Ingen stream från servern.')
        return
      }

      //Reads the stream from the server and updates the progress bar
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let fullResponse = ''

      const processStream = async () => {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          //Decodes the stream and updates the progress bar

          const chunk = decoder.decode(value, { stream: true })
          fullResponse += chunk

          const lines = fullResponse.split('\n')
          fullResponse = lines.pop() ?? ''

          for (const line of lines) {
            if (line.startsWith('data:')) {
              try {
                const json = JSON.parse(line.slice(5).trim())
                console.log('Streamad data:', json)

                // Sets progress depending on streamed data from api.
                if (json.progress !== undefined) {
                  setProgress(json.progress)
                }

                //When finished runs startSegment()

                if (json.status === 'complete') {
                  console.log('Transkribering klar! Startar startSegments()...')
                  setTranscription(json.word_count)
                  setProgress(0)
                  startSegments()
                  return
                }
              } catch (error) {
                console.error('Fel vid JSON-parse:', error)
              }
            }
          }
        }
      }

      await processStream()
    } catch (error) {
      console.error('Fel vid transkribering:', error)
    }
  }

  //Function to get full text to copy-button

  const getFullText = () => {
    return segments
      .map(
        (segment) =>
          `Talare ${segment.speaker.replace('SPEAKER_', '')} - ${formatTime(
            segment.start
          )} - ${formatTime(segment.end)}\n${segment.text}`
      )
      .join('\n\n')
  }

  return (
    <article className="h-full w-full grid grid-cols-7  content-start mt-8 ">
      <section className="col-span-7 col-start-1 flex flex-col h-auto">
        <TranscriptionHeader />
        <div className="flex ">
          <TranscriptionIcons speakers="2" text=" talare" />
          <TranscriptionIcons language="Svenska" />
          <TranscriptionIcons words={transcription} text=" ord" />
          <TranscriptionIcons time="0:00" />
        </div>
        <div className="flex justify-between items-end w-auto h-12 relative">
          {segments.length > 0 && (
            <>
              <CopyBtn text={getFullText()} />
            </>
          )}
        </div>
      </section>

      <section className="w-full h-auto col-span-7 col-start-1 font-Inter overflow-auto overscroll-contain flex flex-col p-2 bg-white rounded-sm mr-4 z-10">
        {segments.length === 0 ? (
          <ProgressBar progress={progress} />
        ) : (
          segments.map((segment: Segment, index: number) => (
            <Segment
              key={index}
              speaker={segment.speaker.replace('SPEAKER_', '')}
              start={formatTime(segment.start)}
              end={formatTime(segment.end)}
              text={segment.text}
              transcriptionMode={transcriptionMode}
            />
          ))
        )}
      </section>
    </article>
  )
}
