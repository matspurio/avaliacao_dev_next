'use client'

import AcessoCard from '@/components/acessoCard'
import Header from '@/components/header'
import ModalAcesso from '@/components/modal-acessos'
import { ArrowLeft } from '@phosphor-icons/react'
import Link from 'next/link'
import { useState } from 'react'

export default function Acessos() {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <main className="flex min-h-screen flex-col items-center px-4 sm:p-18 md:p-14 pt-20 lg:pt-32 bg-gray-200 w-full">
      <Header />
      <div className="md:text-sm text-sm sm:border-2 lg:border-gray-300 w-full md:px-2 pt-10 rounded-lg">
        <Link href="/" className="flex mb-6 underline">
          <ArrowLeft className="mr-1" size={22} weight="thin" />
          Voltar para listagem de atletas
        </Link>
        <div className="flex mb-14 w-full justify-between">
          <h1 className="text-3xl">Listagem de acessos</h1>
          <button
            onClick={() => setShowModal(true)}
            className="p-2 border-2 rounded-md bg-green-600 text-white hover:scale-105 ease-in-out duration-75"
          >
            Liberação de atletas
          </button>
        </div>
        <div className="flex mb-4 items-center">
          <p className="mr-2">Selecione a data desejada:</p>
          <input
            type="date"
            className="p-1 rounded-md bg-gray-200 border-2 border-gray-400"
          />
        </div>
        <div className="grid grid-cols-3 w-full p-1 border-2 rounded-md border-solid border-zinc-400 mb-4 bg-gray-600">
          <div className="flex justify-center items-center text-white">
            <p>Nome do Atleta</p>
          </div>
          <div className="flex justify-center items-center text-white">
            <p>Entrada/Saída</p>
          </div>
          <div className="flex justify-center items-center text-white">
            <p>Horário</p>
          </div>
        </div>
        <AcessoCard />
        <ModalAcesso
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>
    </main>
  )
}
