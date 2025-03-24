'use client'
import { useRef, useState } from 'react'

//Importerade icons från react-icons
import { LuAudioLines } from 'react-icons/lu'
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai'
import { DarkMode } from '@/src/services/themeService'

// This component is a drag and drop component
// It allows the user to drag and drop a file or click to select a file
// The file is then uploaded to the server
// The user can also remove the file

export default function DragAndDrop() {
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<string>('')
  const isDarkMode = DarkMode()
  const apiURL = process.env.NEXT_PUBLIC_API_URL

  //nlyallowing files with these endings
  const allowedFileExtensions = ['.wav', '.mp3', '.ogg', '.m4a']

  //User can select a file from their computer, when file is selected in fileexplorer, the file is checked for correct file extension and stored in audioFile, handleUpload is called
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]
      const fileExtension = file.name.split('.').pop()?.toLowerCase()
      if (
        !fileExtension ||
        !allowedFileExtensions.includes(`.${fileExtension}`)
      ) {
        alert('Fel filtyp. Endast WAV, MP3, OGG, M4A tillåts.')
        setAudioFile(null)
        return
      }

      setAudioFile(file)
      handleUpload(file)
    }
  }

  //User can select a file from their computer, when file is dropped , the file is checked for correct file extension and stored in audioFile, handleUpload is called
  function handleDrop(e: React.DragEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      const fileExtension = droppedFile.name.split('.').pop()?.toLowerCase()
      if (
        !fileExtension ||
        !allowedFileExtensions.includes(`.${fileExtension}`)
      ) {
        alert('Fel filtyp. Endast WAV, MP3, OGG, M4A tillåts.')
        setAudioFile(null)
        return
      }

      setAudioFile(droppedFile)
      handleUpload(droppedFile)
    }
  }

  //Prevent default behavior of browser when file is dragged over form, changes look of drag and drop area
  function handleDragLeave(e: React.DragEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
  }

  function handleDragOver(e: React.DragEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }

  function handleDragEnter(e: React.DragEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }

  //Removes file from audioFile and resets uploadStatus
  function removeFile() {
    setAudioFile(null)
    setUploadStatus('')
  }

  //Opens file explorer when user clicks on drag and drop area
  function openFileExplorer() {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.click()
    }
  }

  //Uploads file to server, using fetch, sends file to server as formdata
  const handleUpload = async (audioFile: File) => {
    if (!audioFile) {
      setUploadStatus('No file selected')
      return
    }

    setIsUploading(true)
    setUploadStatus('')

    const formData = new FormData()
    formData.append('audio_file', audioFile)

    try {
      const response = await fetch(`${apiURL}/upload-audio`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Uppladdning misslyckades')
      }

      const data = await response.json()
      setUploadStatus('Uppladdad')
      console.log(uploadStatus)
      localStorage.setItem('fileName', audioFile.name)

      console.log(data)
    } catch (error) {
      console.log(error)

      setUploadStatus('Uppladdning misslyckades')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    //Default styling for drag and drop area
    //If audioFile is null, user can click to select file or drag and drop file
    <section className="flex flex-col justify-self-center self-start w-full">
      <h2 className="text-xs mt-4 font-medium">Ladda upp fil</h2>
      <h3 className="mb-4 text-xs text-stone-400">
        Max 200MB - WAV, MP3, OGG, M4A
      </h3>
      <div
        className={`self-center justify-center items-center w-5/6 h-60 flex ${isDarkMode ? 'bg-stone-700' : 'bg-[#1A7267]'} rounded mb-8`}
      >
        <form
          className={`p-8 w-5/6 h-5/6 rounded text-center flex flex-col justify-center transition-all duration-500 ease-in-out ${
            dragActive
              ? isDarkMode
                ? 'bg-stone-600'
                : 'bg-[#5F8E88]'
              : isDarkMode
                ? 'bg-stone-700 hover:bg-stone-600'
                : 'bg-[#1A7267] hover:bg-[#5F8E88]'
          }`}
          onDragEnter={handleDragEnter}
          onSubmit={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
        >
          <input
            className="hidden"
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
            accept="audio/*"
          />
          {!audioFile ? (
            <div onClick={openFileExplorer} className="flex flex-col">
              <p className="mt-4 mb-2 text-white text-xs">
                Dra och släpp din fil här
              </p>
              <LuAudioLines className="self-center text-white" />
              <p className="text-xs mt-2 text-white">
                eller klicka för att välja en fil
              </p>
            </div>
          ) : (
            //On upload, different messages are displayed depending on upload status and if file is uploading
            <div className="flex flex-col items-center" onClick={removeFile}>
              {isUploading ? (
                <div className="flex flex-col justify-center items-center">
                  <div className="w-20 h-20 border-t-4 border-white border-solid rounded-full animate-spin mb-2" />
                </div>
              ) : uploadStatus === 'Uppladdad' ? (
                <span className="mt-4 mb-2 flex flex-col items-center text-xs text-white">
                  <AiOutlineCheckCircle className="mb-2 size-6 text-white" />
                  {audioFile?.name}
                </span>
              ) : (
                <span className="mt-4 mb-2 flex flex-col items-center text-xs text-white">
                  <AiOutlineCloseCircle className="mb-2 size-6 text-red-500" />
                  Uppladdning misslyckades
                </span>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
