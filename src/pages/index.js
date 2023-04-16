// import { Inter } from "next/font/google";
import Link from "next/link"
import Image from "next/image"

import Logo from "../assets/logo.png"

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <nav className="p-4 flex flex-row justify-between fixed w-full ">
          <Image src={Logo} alt="Logo" width={40} height={40} />
          <Link
            href="/login"
            className="bg-blue-400 px-4 py-2 w-auto rounded text-white"
          >
            Go to Dashboard
          </Link>
        </nav>
        <div className="w-full h-[75vh] flex flex-row justify-center items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold tracking-widest">EzyCare</h1>
            <p className="text-2xl ">
              The easy and simple way to manage your clinic and patients.
            </p>
            <div className="flex flex-row gap-4">
              <Link
                href="/signup"
                className="rounded bg-blue-400 px-4 py-1 text-white font-bold"
              >
                Signup
              </Link>
              <Link
                href="/login"
                className="border-2 rounded border-blue-400 px-4 py-1 font-bold"
              >
                Log In
              </Link>
            </div>
          </div>
          <div className="">
            <img src="/LandingBg.jpg" alt="Product Image" className="w-96" />
          </div>
        </div>
      </div>
    </>
  )
}
