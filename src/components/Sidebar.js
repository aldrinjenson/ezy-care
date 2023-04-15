import { RxDashboard } from "react-icons/rx"
import { BsFillPeopleFill } from "react-icons/bs"
import { TbWriting } from "react-icons/tb"
import { BiHelpCircle } from "react-icons/bi"
import { FiSettings } from "react-icons/fi"

const sideBarButtonStyle =
  "w-full py-4 rounded flex flex-row justify-start items-center hover:bg-gray-200 flex flex-row gap-4"

export default function Sidebar() {
  return (
    <div className="w-96 h-full flex flex-col justify-start items-start gap-4 text-2xl">
      <div className="w-full h-20 flex justify-start items-center border-r-2 border-t-2 border-b-2 border-gray-200">
        <p>Mavericks Health</p>
      </div>
      <input type="text" placeholder="search" className="text-sm border border-gray-300" />
      <div className="w-full h-full border-r outline-gray-200 px-4 ">
        <p className="text-sm">Main</p>
        <button className={sideBarButtonStyle}>
          <RxDashboard />
          Home
        </button>
        <button className={sideBarButtonStyle}>
          <BsFillPeopleFill />
          Patients
        </button>
        <button className={sideBarButtonStyle}>
          <TbWriting />
          Appointments
        </button>
      </div>
      <div className="w-full h-full border-r outline-gray-200">
        <p className="text-sm">Support</p>

        <button className={sideBarButtonStyle}>
          <BiHelpCircle />
          Help
        </button>
        <button className={sideBarButtonStyle}>
          <FiSettings />
          Settings
        </button>
      </div>
    </div>
  )
}
