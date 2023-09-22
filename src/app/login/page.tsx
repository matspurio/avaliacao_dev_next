'use client'

import Link from 'next/link'
import { ArrowLeft, Barbell } from '@phosphor-icons/react'

export default function Login() {
  return (
    <div className="bg-gray-200 w-full min-h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full min-h-screen">
        <div className="bg-gray-600 sm:px-8 p-4 sm:py-10 sm:w-4/5 lg:w-2/5 md:w-3/5 rounded-md">
          <div className="flex items-center justify-center mb-6">
            <Barbell size={44} className="mr-2 text-gray-900" />
            <p className="text-xl text-gray-300">
              RAC Gym <span className="text-gray-900">Login</span>
            </p>
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-2">Usuário</label>
            <div className="border-b-2 border-gray-300 mb-6">
              <input
                className="bg-transparent w-full focus:outline-none text-gray-300"
                type="text"
              />
            </div>
            <label className="text-sm text-gray-300 mb-2">Senha</label>
            <div className="border-b-2 border-gray-300 mb-6">
              <input
                className="bg-transparent w-full focus:outline-none text-gray-300"
                type="password"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div>
              <input className="w-3 h-3" type="checkbox" />
              <label className="text-sm text-gray-300 mb-2 ml-2">
                Manter-me conectado
              </label>
            </div>
            <div>
              <Link
                href="/recuperar-senha"
                className="text-sm text-gray-300 cursor-pointer underline"
              >
                Esquecei minha senha
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="bg-red-800 text-white p-1 w-2/5 rounded-md">
              Login
            </button>
          </div>
          <div className="flex mt-10 justify-center">
            <Link href="/" className="text-sm text-gray-300 flex">
              <ArrowLeft
                className="text-gray-300 mr-1"
                size={20}
                weight="thin"
              />
              Voltar para página principal
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
