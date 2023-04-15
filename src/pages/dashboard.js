import { useState } from "react"

import { FaStop, FaPlay, FaPause } from "react-icons/fa"

import Navbar from "@/components/Navbar"

export default function Dashboard() {
  const [symptoms, setSymptoms] = useState("")
  const [diagnosis, setDiagnosis] = useState("")

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="h-full bg-green-200 flex flex-col justify-evenly items-center">
        <div className="w-full flex flex-row justify-evenly items-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-3xl">Symptoms</p>
            <textarea
              className="h-48 w-96"
              onChange={(e) => {
                setSymptoms(e.target.value)
              }}
              placeholder="Please start recording to generate symptoms"
            ></textarea>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-3xl">Diagnosis</p>
            <textarea
              className="h-48 w-96"
              onChange={(e) => {
                setDiagnosis(e.target.value)
              }}
              placeholder="Please start recording to generate diagnosis"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-2xl">Recording Details</p>
          <div className="flex flex-row gap-4 text-2xl">
            <button>
              <FaPlay />
            </button>
            <button>
              <FaPause />
            </button>
            <button>
              <FaStop />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
