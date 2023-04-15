const sideBarButtonStyle =
  "w-full px-4 py-4 rounded flex flex-row justify-start items-center hover:bg-gray-200"

export default function Sidebar() {
  return (
    <div className="w-96 h-full px-4 py-10 flex flex-col justify-start items-start text-2xl">
      <button className={sideBarButtonStyle}>Home</button>
      <button className={sideBarButtonStyle}>Patients</button>
      <button className={sideBarButtonStyle}>Appointments</button>
      <button className={sideBarButtonStyle}>Settings</button>
    </div>
  )
}
