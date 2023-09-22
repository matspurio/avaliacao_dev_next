import { Barbell, Gear, UserCircle } from '@phosphor-icons/react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed right-0 left-0 top-0 w-full bg-gray-600 md:px-14 py-2 px-4 sm:px-18 flex justify-between items-center">
      <div className="flex items-center">
        <Barbell size={44} className="mr-2 text-gray-900" />
        <p className="text-xl text-gray-300">RAC Gym</p>
      </div>
      <div className="flex items-center">
        <Link
          href="/login"
          className="flex bg-gray-800 p-2 rounded-lg mr-4 hover:opacity-90"
        >
          <UserCircle size={24} className="text-gray-300 mr-2" />
          <p className="text-gray-300">Login</p>
        </Link>
        <div className="p-1 bg-gray-800 rounded-full hover:scale-105 duration-100">
          <Gear size={25} className="text-gray-300 cursor-pointer" />
        </div>
      </div>
    </header>
  )
}
