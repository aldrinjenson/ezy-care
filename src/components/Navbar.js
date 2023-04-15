import { MdOutlineAccountCircle } from "react-icons/md"

export default function Navbar() {
  return (
    <div className="h-20 w-full px-8 flex flex-row justify-between items-center shadow-md rounded-md">
      <p className="text-2xl font-bold tracking-wide">Mavericks Health</p>
      <div className="flex flex-row items-center gap-2">
        <MdOutlineAccountCircle className="text-4xl" />
        <p>Dr. Allen</p>
      </div>
    </div>
  )
}
