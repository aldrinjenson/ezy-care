import { useState } from "react"

import Navbar from "@/components/Navbar"
import Recorder from "@/components/Recorder"

export default function Dashboard() {
  const [symptoms, setSymptoms] = useState("")
  const [diagnosis, setDiagnosis] = useState("")

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="py-10 px-4 flex flex-col gap-4">
        <p className="text-2xl">Patient Details</p>
        <div className="flex flex-col justify-center items-start gap-4 text-3xl">
          <p>
            Name: <span className="font-bold">Aldrin Jenson</span>
          </p>
          <p>
            Age: <span className="font-bold">21</span>
          </p>
        </div>
      </div>
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
        <Recorder />
      </div>
    </div>
  )
}
