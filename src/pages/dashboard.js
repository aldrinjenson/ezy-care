import { useState, useEffect } from "react"

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"

import app, { auth } from "@/configs/firebase"

import { MdLogout } from "react-icons/md"
import { FiSettings } from "react-icons/fi"

import Navbar from "@/components/Navbar"
import Recorder from "@/components/Recorder"
import Sidebar from "@/components/Sidebar"

export default function Dashboard() {
  const [symptoms, setSymptoms] = useState("")
  const [diagnosis, setDiagnosis] = useState("")

  const [tab, setTab] = useState("home")
  const [accountActionsOpen, setAccountActionsOpen] = useState(false)

  const [email, setEmail] = useState("allenshibu@outlook.in")
  const [password, setPassword] = useState("hello123")

  const signup = async (e) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  const login = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully")
      })
      .catch((error) => {
        // An error happened.
      })
  }

  return (
    <div className="h-screen w-full flex flex-row">
      <Sidebar tab={tab} setTab={setTab} />
      <div className="h-full w-full">
        <Navbar
          accountActionsOpen={accountActionsOpen}
          setAccountActionsOpen={setAccountActionsOpen}
        />
        {accountActionsOpen && (
          <div className="absolute rounded right-0 w-72 bg-white shadow flex flex-col gap-2 py-4 px-1">
            <p className="font-bold text-xl px-2">Dr. Smith</p>
            <p className="px-2">smith@mvkshlth.com</p>
            <button className="w-full px-2 py-2 rounded flex flex-row justify-between items-center hover:bg-gray-200">
              Account
              <FiSettings />
            </button>
            <button
              className="w-full px-2 py-2 rounded flex flex-row justify-between items-center hover:bg-gray-200"
              onClick={logout()}
            >
              Log Out
              <MdLogout />
            </button>
          </div>
        )}
        <div className="w-full flex flex-col gap-4">
          <div className="h-64 px-8 mx-8 flex flex-col gap-2 bg-slate-100 rounded-xl">
            <p className="text-2xl">Patient Details</p>
            <div className="h-full flex flex-col justify-center items-start gap-4 text-3xl">
              <p>
                Name: <span className="font-bold">John Doe</span>
              </p>
              <p>
                Age: <span className="font-bold">65</span>
              </p>
            </div>
          </div>
          <div className="w-full h-72 flex flex-row justify-evenly items-center">
            <div className="h-full w-full flex flex-col justify-center items-center gap-4">
              <p className="text-3xl">Symptoms</p>
              <textarea
                className="h-full w-full"
                onChange={(e) => {
                  setSymptoms(e.target.value)
                }}
                placeholder="Please start recording to generate symptoms"
              ></textarea>
            </div>
            <div className="h-full w-full flex flex-col justify-center items-center gap-4">
              <p className="text-3xl">Diagnosis</p>
              <textarea
                className="h-full w-full"
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
    </div>
  )
}
