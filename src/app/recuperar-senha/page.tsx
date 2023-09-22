'use client'

import { ArrowLeft } from '@phosphor-icons/react'
import Link from 'next/link'
import { FormEvent, useRef } from 'react'

export default function recuperarSenha() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputEmail = useRef<HTMLInputElement>(null)

  const sendEmail = (event: FormEvent) => {
    event.preventDefault()
    const email = inputEmail.current?.value
    alert(`\nAs instruções foram enviadas para o e-mail:\n${email}`)
  }

  return (
    <div className="bg-gray-200 w-full min-h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full min-h-screen">
        <div className="bg-gray-600 sm:px-8 p-4 sm:py-10 sm:w-4/5 lg:w-2/5 md:w-3/5 rounded-md">
          <h1 className="text-xl mb-8 text-gray-300 text-center">
            Informe seu e-mail:
          </h1>
          <div>
            <label className="text-sm text-gray-300 mb-2">E-mail</label>
            <div className="border-b-2 border-gray-300 mb-6">
              <input
                ref={inputEmail}
                className="bg-transparent focus:outline-none w-full text-gray-300"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              onClick={sendEmail}
              className="bg-red-800 text-white p-1 w-2/5 rounded-md mt-4"
            >
              Enviar
            </button>
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/login" className="text-sm text-gray-300 flex">
              <ArrowLeft
                className="text-gray-300 mr-1"
                size={20}
                weight="thin"
              />
              Voltar para página de Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
